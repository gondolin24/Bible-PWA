// @ts-ignore

import {BibleService} from "./bible/BibleService";
import {TESTAMENTS} from "../enums/Testaments";

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

    it('test get initial verse ', () => {
        const bibleService = new BibleService()
        const initialVerse = bibleService.getInitialVerse('MARK')
        expect("The beginning of the gospel of Jesus Christ, the Son of God;").toEqual(initialVerse)
    })

    it('test get all books ', () => {
        const bibleService = new BibleService()
        const initialVerse = bibleService.getBookList(TESTAMENTS.ALL_TESTAMENTS)
        expect("The beginning of the gospel of Jesus Christ, the Son of God;").toEqual(initialVerse)
    })


})
