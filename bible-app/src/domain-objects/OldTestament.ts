import {Testament} from "./Testament";
import * as FIRST_CHRONICLES from '../bible/oldTestament/1Chronicles.json'
import * as SECOND_CHRONICLES from '../bible/oldTestament/2Chronicles.json'
import * as GENESIS from '../bible/oldTestament/Genesis.json'
import * as EXODUS from '../bible/oldTestament/Exodus.json'
import * as NUMBERS_BOOK from '../bible/oldTestament/Numbers.json'
import * as LEVEITICUS from '../bible/oldTestament/Leviticus.json'
import * as DEUTERONOMY from '../bible/oldTestament/Deuteronomy.json'
import * as JOSHUA from '../bible/oldTestament/Joshua.json'
import * as JUDGES from '../bible/oldTestament/Judges.json'
import * as RUTH from '../bible/oldTestament/Ruth.json'
import * as FIRST_SAMUEL from '../bible/oldTestament/1Samuel.json'
import * as SECOND_SAMUEL from '../bible/oldTestament/2Samuel.json'
import * as FIRST_KINGS from '../bible/oldTestament/1Kings.json'
import * as SECOND_KINGS from '../bible/oldTestament/2Kings.json'
import * as EZRA from '../bible/oldTestament/Ezra.json'
import * as JOB from '../bible/oldTestament/Job.json'
import * as PSALMS from '../bible/oldTestament/Psalms.json'
import {BibleBook} from "./BibleBook";
import * as PROVERBS from '../bible/oldTestament/Proverbs.json'
import * as ISAIAH from '../bible/oldTestament/Isaiah.json'
import * as EZEKIEL from '../bible/oldTestament/Ezekiel.json'
import * as DANIEL from '../bible/oldTestament/Daniel.json'
import * as JOEL from '../bible/oldTestament/Joel.json'
import * as MALACHI from '../bible/oldTestament/Malachi.json'
import * as MICAH from '../bible/oldTestament/Micah.json'
import * as AMOS from '../bible/oldTestament/Amos.json'
import * as JONAH from '../bible/oldTestament/Jonah.json'
import * as HAGGAI from '../bible/oldTestament/Haggai.json'
import * as NAHUM from '../bible/oldTestament/Nahum.json'
import * as HOSEA from '../bible/oldTestament/Hosea.json'
import * as OBADIAH from '../bible/oldTestament/Obadiah.json'
import * as HABAKKUK from '../bible/oldTestament/Habakkuk.json'
import * as ZEPHANIAH from '../bible/oldTestament/Zephaniah.json'
import * as lAMENTATIONS from '../bible/oldTestament/Lamentations.json'
import * as JERMEMIAH from '../bible/oldTestament/Jeremiah.json'
import * as ECCLESIASTES from '../bible/oldTestament/Ecclesiastes.json'
import * as SONG_OF_SOLOMON from '../bible/oldTestament/SongofSolomon.json'
import * as ZECHARIAH from '../bible/oldTestament/Zechariah.json'

export class OldTestament extends Testament {

    static fromFileSource() {

        const rawBooks = [
            GENESIS,
            EXODUS,
            LEVEITICUS,
            NUMBERS_BOOK,
            DEUTERONOMY,
            JOSHUA,
            JUDGES,
            RUTH,
            FIRST_SAMUEL,
            SECOND_SAMUEL,
            FIRST_KINGS,
            SECOND_KINGS,
            FIRST_CHRONICLES,
            SECOND_CHRONICLES,
            EZRA,
            JOB,
            PSALMS,
            PROVERBS,
            ECCLESIASTES,
            SONG_OF_SOLOMON,
            ISAIAH,
            JERMEMIAH,
            lAMENTATIONS,
            EZEKIEL,
            DANIEL,
            HOSEA,
            JOEL,
            AMOS,
            OBADIAH,
            JONAH,
            MICAH,
            NAHUM,
            HABAKKUK,
            ZEPHANIAH,
            HAGGAI,
            ZECHARIAH,
            MALACHI
        ]

        const books = rawBooks.map((book) => new BibleBook(book))
        return new OldTestament(books)

    }

}
