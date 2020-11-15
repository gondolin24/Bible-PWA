import {Testament} from "./Testament";

export class NewTestament extends Testament {
    getBookList(): string[] {
        return ['new Book 1', 'new Book 2']
    }

}
