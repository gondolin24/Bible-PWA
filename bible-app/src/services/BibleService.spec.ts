// @ts-ignore

import {BibleService} from "./bible/BibleService";

describe('Test Bible Service', () => {

    it('test get book', () => {
        const bibleService = new BibleService()

        const bookList = bibleService.getBook('MARK')
        const numChapters = bookList.numChapters
        expect(numChapters).toEqual(16)

    })

})
