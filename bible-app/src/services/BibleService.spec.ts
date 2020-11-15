// @ts-ignore
import {NewTestament} from "../domain-objects/NewTestament";

describe('Test Bible Service', () => {

    it('test import', () => {
        const g = NewTestament.fromFileSource().bookList[0].bookChapters
        expect([]).toEqual(['Book 1', 'Book 2'])
    })

})
