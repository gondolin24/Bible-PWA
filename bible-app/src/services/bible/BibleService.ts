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

    getChapters(): Number {
        return 0
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

    getAllChapterVerses() {

    }

    getVerses(): Number {
        return 0
    }

    getVerse(): String {
        return ''
    }

    getPreviousVerse() {

    }

}