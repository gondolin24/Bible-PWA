import {Testament} from "./Testament";
import * as MARK from '../bible/newTestament/Mark.json'
import * as MATTHEW from '../bible/newTestament/Matthew.json'
import * as LUKE from '../bible/newTestament/Luke.json'
import * as JOHN from '../bible/newTestament/John.json'
import * as ACTS from '../bible/newTestament/Acts.json'
import * as ROMANS from '../bible/newTestament/Romans.json'
import * as FIRST_CORINTHIANS from '../bible/newTestament/1Corinthians.json'
import * as SECOND_CORINTHIANS from '../bible/newTestament/2Corinthians.json'
import * as GALATIANS from '../bible/newTestament/Galatians.json'
import * as EPHESIANS from '../bible/newTestament/Ephesians.json'
import * as PHILIPPIANS from '../bible/newTestament/Philippians.json'
import * as COLOSSIANS from '../bible/newTestament/Colossians.json'
import * as FIRST_THESSALONIANS from '../bible/newTestament/1Thessalonians.json'
import * as SECOND_THESSSALONIANS from '../bible/newTestament/2Thessalonians.json'
import * as FIRST_TIMOTHY from '../bible/newTestament/1Timothy.json'
import * as SECOND_TIMOTHY from '../bible/newTestament/2Timothy.json'
import * as TITUS from '../bible/newTestament/Titus.json'
import * as PHILEMON from '../bible/newTestament/Philemon.json'
import * as HEBREWS from '../bible/newTestament/Hebrews.json'
import * as JAMES from '../bible/newTestament/James.json'
import * as FIRST_PETER from '../bible/newTestament/1Peter.json'
import * as SECOND_PETER from '../bible/newTestament/2Peter.json'
import * as FIRST_JOHN from '../bible/newTestament/1John.json'
import * as SECOND_JOHN from '../bible/newTestament/2John.json'
import * as THIRD_JOHN from '../bible/newTestament/3John.json'
import * as JUDE from '../bible/newTestament/Jude.json'
import * as REVELATIONS from '../bible/newTestament/Revelation.json'


import {BibleBook} from "./BibleBook";


export class NewTestament extends Testament {

    static fromFileSource() {

        const rawBooks = [
            MATTHEW,
            MARK,
            LUKE,
            JOHN,
            ACTS,
            ROMANS,
            FIRST_CORINTHIANS,
            SECOND_CORINTHIANS,
            GALATIANS,
            EPHESIANS,
            PHILIPPIANS,
            COLOSSIANS,
            FIRST_THESSALONIANS,
            SECOND_THESSSALONIANS,
            FIRST_TIMOTHY,
            SECOND_TIMOTHY,
            TITUS,
            PHILEMON,
            HEBREWS,
            JAMES,
            FIRST_PETER,
            SECOND_PETER,
            FIRST_JOHN,
            SECOND_JOHN,
            THIRD_JOHN,
            JUDE,
            REVELATIONS
        ]

        const books = rawBooks.map((book) => new BibleBook(book))
        return new NewTestament(books)

    }

}
