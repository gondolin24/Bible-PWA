//returns testament data
import {OldTestament} from "../../domain-objects/OldTestament";
import {NewTestament} from "../../domain-objects/NewTestament";

export class TestamentService {

    getOldTestament() {
        return new OldTestament()
    }

    getNewTestament() {
        return new NewTestament()
    }

}
