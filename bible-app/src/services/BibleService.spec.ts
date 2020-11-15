// @ts-ignore
import {TestamentService} from "./bible/TestamentService";

describe('Test Bible Service', () => {
    it('test get old testament book list', () => {
        const bookList = new TestamentService().getOldTestament().getBookList()
        expect(bookList).toEqual(['Book 1', 'Book 2'])
    })
})
