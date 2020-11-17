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

    getVerses(): Number {
        return 0
    }

    getVerse(): String {
        return ''
    }

    getPreviousVerse() {

    }

}
