export class BibleChapter {
    private readonly _verses: string[];

    get verses(): string[] {
        return this._verses;
    }

    getVerse(verse: number) {
        return this._verses[verse - 1]
    }

    constructor(verses: string[]) {
        this._verses = verses;
    }

    get numVerses(): number {
        return this.verses.length
    }

    static fromRawData(chapter: any) {
        const {verses} = chapter
        const formattedVerses = verses.map((verse: any) => {
            const key = Object.keys(verse)
            return verse[key[0]]

        })

        return new BibleChapter(formattedVerses)
    }

}
