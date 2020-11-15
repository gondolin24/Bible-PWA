import {TESTAMENTS} from "../../enums/Testaments";
import {NewTestament} from "../../domain-objects/NewTestament";
import {OldTestament} from "../../domain-objects/OldTestament";

export class BibleService {

    getBookList(testament: string): string[] {
        if (testament === TESTAMENTS.OLD_TESTAMENTS) {
            return OldTestament.fromFileSource().bookNameList
        }
        //given a testament return a list of all the books in that testament
        return NewTestament.fromFileSource().bookNameList
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

    getPreviousVerse() {

    }

}
