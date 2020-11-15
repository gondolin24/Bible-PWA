import {Testament} from "./Testament";
import * as MARK from '../bible/newTestament/Mark.json'
import * as MATTHEW from '../bible/newTestament/Matthew.json'
import {BibleBook} from "./BibleBook";


export class NewTestament extends Testament {

    static fromFileSource() {

        const rawBooks = [
            MARK,
            MATTHEW
        ]

        const books = rawBooks.map((book) => new BibleBook(book))
        return new NewTestament(books)

    }

}
