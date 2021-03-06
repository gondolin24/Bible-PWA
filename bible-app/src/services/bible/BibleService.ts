import {TESTAMENTS} from "../../enums/Testaments";
import {NewTestament} from "../../domain-objects/NewTestament";
import {OldTestament} from "../../domain-objects/OldTestament";
import {BibleBook} from "../../domain-objects/BibleBook";
import {equalsIgnoreCase} from "../../Util";

export class BibleService {

    private getTestamentObject(testament: string) {
        if (testament === TESTAMENTS.OLD_TESTAMENTS) {
            return OldTestament.fromFileSource()
        }
        //given a testament return a list of all the books in that testament
        return NewTestament.fromFileSource()
    }

    getBookList(testament: string): string[] {
        if (testament === TESTAMENTS.ALL_TESTAMENTS) {
            return this.getAllBooks().map((book) => book.name)
        }

        return this.getTestamentObject(testament).bookNameList
    }

    getVerseText(book: string, chapter: number, verse: number) {
        const bb = this.getBook(book)
        return bb.getChapter(chapter).getVerse(verse)
    }

    getBook(book: string): BibleBook {
        // @ts-ignore
        return this.getAllBooks().find((bibleBook) => equalsIgnoreCase(bibleBook.name, book))
    }

    getAllBooks() {
        return [...OldTestament.fromFileSource().bookList, ...NewTestament.fromFileSource().bookList]
    }

    getBookVerses(book: string, chapterNumber: number): string[] {
        return this.getBook(book).getChapter(chapterNumber).verses
    }

    getInitialVerse(book: string): string {
        return this.getBook(book).getChapter(1).verses[0]

    }

    isBookInTestament(testament: string, book: string): boolean {
        return this.getBookList(testament).some((val) => val === book)
    }

    getPreviousVerse(book: string, chapterNum: number, verseNum: number, testament: string): any {
        if (book === 'Genesis' && chapterNum === 1 && verseNum === 1) {
            return {
                bookName: 'Revelation',
                bookChapter: 22,
                verse: 20,
                testament: TESTAMENTS.NEW_TESTAMENTS
            }
        }
        if (book === 'Matthew' && chapterNum === 1 && verseNum === 1) {
            return {
                bookName: 'Malachi',
                bookChapter: 4,
                verse: 5,
                testament: TESTAMENTS.OLD_TESTAMENTS
            }
        }

        const prevVerse = verseNum - 1
        const prevChapter = chapterNum - 1
        let verse = verseNum
        let chapter = chapterNum
        let bookName = book

        if (prevVerse == 0) {

            if (prevChapter == 0) {
                //change books
                //get previous book

                const bookList = this.getBookList(testament)
                const currentIndex = bookList.map((val, index) => {
                    if (val === book) {
                        return index
                    }
                    return null
                }).find((val) => (val)) || 1
                bookName = bookList[currentIndex - 1]
                chapter = this.getBook(bookName).numChapters
                verse = this.getBook(bookName).getChapter(chapter).numVerses - 1
            } else {
                chapter = prevChapter
                verse = this.getBook(bookName).getChapter(chapter).numVerses - 1
            }

        } else {
            verse = prevVerse
        }


        return {
            bookName,
            bookChapter: chapter,
            verse,
            testament
        }
    }


    getNextVerse(book: string, chapterNum: number, verseNum: number, testament: string): any {
        if (book === 'Revelation' && chapterNum === 22 && verseNum >= 20) {
            return {
                bookName: 'Genesis',
                bookChapter: 1,
                verse: 1,
                testament: TESTAMENTS.OLD_TESTAMENTS
            }
        }
        if (book === 'Malachi' && chapterNum === 1 && verseNum === 1) {
            return {
                bookName: 'Matthew',
                bookChapter: 1,
                verse: 1,
                testament: TESTAMENTS.NEW_TESTAMENTS
            }
        }
        let verse = verseNum
        let chapter = chapterNum
        const nextVerse = verseNum + 1
        const nextChapter = chapterNum + 1

        const bookList = this.getBookList(testament)
        let bookName = book

        console.log(book + "befrooee")

        const currentChapterVerse = this.getBook(book).getChapter(chapter).numVerses - 1


        if (nextVerse > currentChapterVerse) {

            if (nextChapter > this.getBook(book).numChapters) {
                const currentIndex = bookList.map((val, index) => {
                    if (val === book) {
                        return index
                    }
                    return null
                }).find((val) => (val)) || 1
                bookName = bookList[currentIndex + 1]
                chapter = 1
                verse = 1

            } else {
                chapter = nextChapter
                verse = 1
            }
        } else {
            verse = nextVerse
        }

        return {
            bookName,
            bookChapter: chapter,
            verse,
            testament
        }
    }


}
