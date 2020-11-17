// @ts-ignore

import {BibleService} from "./bible/BibleService";

describe('Test Bible Service', () => {

    it('test get chapter numbers', () => {
        const bibleService = new BibleService()

        const bookList = bibleService.getBook('MARK')
        const numChapters = bookList.numChapters
        expect(numChapters).toEqual(16)
    })

    it('test get number of verses ', () => {
        const bibleService = new BibleService()
        const verses = bibleService.getBookVerses('MARK', 2)
        expect(35).toEqual(verses.length)
    })


})
