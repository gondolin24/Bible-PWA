import {TestamentService} from "./TestamentService";

export class BibleService {

    getBookList(testament: string): string[] {
        const testamentService = new TestamentService()
        if (testament === 'old_testament') {
            return testamentService.getNewTestament().getBookList()
        }
        //given a testament return a list of all the books in that testament
        return new TestamentService().getOldTestament().getBookList()
    }

    getChapters(): Number {
        return 0
    }

    getVerses(): Number {
        return 0
    }

    getVerse(): String {
        return ''
    }

}
