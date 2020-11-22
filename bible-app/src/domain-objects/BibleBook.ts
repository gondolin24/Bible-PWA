import {BibleChapter} from "./BibleChapter";

export class BibleBook {
    private readonly _bookData: any

    get bookData(): any {
        return this._bookData;
    }

    constructor(bookData: any) {
        this._bookData = bookData;
    }

    get name(): string {
        return this.bookData.default.book
    }

    get bookChapters() {
        return this.bookData.default.chapters
            .map((chapter: any) => BibleChapter.fromRawData(chapter))
    }

    getChapter(chapterNum: number): BibleChapter {
        // @ts-ignore
        let bookChapter = this.bookChapters[chapterNum - 1];
        return bookChapter
    }

    get numChapters(): number {
        return this.bookChapters.length
    }

}
