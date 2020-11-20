import {Testament} from "./Testament";
import * as FIRST_CHRONICLES from '../bible/oldTestament/1Chronicles.json'
import * as SECOND_CHRONICLES from '../bible/oldTestament/2Chronicles.json'
import * as GENESIS from '../bible/oldTestament/Genesis.json'
import * as EXODUS from '../bible/oldTestament/Exodus.json'
import * as NUMBERS_BOOK from '../bible/oldTestament/Numbers.json'
import * as LEVEITICUS from '../bible/oldTestament/Leviticus.json'


import {BibleBook} from "./BibleBook";


export class OldTestament extends Testament {

    static fromFileSource() {

        const rawBooks = [
            GENESIS,
            EXODUS,
            LEVEITICUS,
            NUMBERS_BOOK,
            FIRST_CHRONICLES,
            SECOND_CHRONICLES
        ]

        const books = rawBooks.map((book) => new BibleBook(book))
        return new OldTestament(books)

    }

}
