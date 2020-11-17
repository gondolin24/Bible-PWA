import {BibleBook} from "./BibleBook";

export abstract class Testament {

    private readonly _bookList: BibleBook[];

    constructor(bookList: BibleBook[]) {
        this._bookList = bookList;

    }

    get bookList(): BibleBook[] {
        return this._bookList;
    }

    get bookNameList(): string[] {
        return this.bookList.map((book) => book.name)
    }

    getBookByName(name: string): BibleBook {
        // @ts-ignore
        return this.bookList.find((book) => book.name === name)
    }

}
