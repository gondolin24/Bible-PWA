import React, {useEffect, useState} from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonRange,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {bookOutline, caretBack, caretForward, readerOutline, wine} from "ionicons/icons";
import BookSelection from "./BookSelection";
import {TESTAMENTS} from "../../enums/Testaments";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";

const bibleService = DI_CONTAINER.container.BibleService

const BibleSearchTopNav: React.FC = () => {

    const [testament, setTestament] = useState(TESTAMENTS.OLD_TESTAMENTS)
    const [bibleBookList, setBibleBookList] = useState(bibleService.getBookList(testament))
    const [selectedBook, setSelectedBook] = useState(bibleBookList[0])
    const [chapterVerses, setChapterVerses] = useState<string[]>([])

    const [verseValue, setVerseValue] = useState(1);
    const [chapterValue, setChapterValue] = useState(1);

    const [isVerse, setIsVerse] = useState(false)

    const [saved, setSaved] = useState(false)
    const [flag, setFlag] = useState('primary')
    const [chapterRange, setChapterRange] = useState(30)
    const [verseText, setVerseText] = useState(bibleService.getInitialVerse(selectedBook))

    useEffect(() => {
        if (saved) {
            setFlag('primary')

        } else {
            setFlag('warning')
        }

    }, [saved])

    useEffect(() => {
        const bookList = bibleService.getBookList(testament)
        setBibleBookList(bookList)

        //this is a work around for an interaction I did not knew existed
        if (!bibleService.isBookInTestament(testament, selectedBook)) {
            setSelectedBook(bookList[0])
        }
    }, [testament])


    useEffect(() => {
        const book = bibleService.getBook(selectedBook)
        setChapterRange(book.numChapters)
        let selectedChapter = book.numChapters
        if (chapterValue < selectedChapter) {
            selectedChapter = chapterValue
        }
        const verses = bibleService.getBookVerses(selectedBook, selectedChapter)
        setChapterVerses(verses)
        setVerseText(verses[verseValue - 1])
        setChapterValue(selectedChapter)
    }, [testament, selectedBook])

    useEffect(() => {
        const verses = bibleService.getBookVerses(selectedBook, chapterValue)
        setChapterVerses(verses)

        let selectedVerse = verses.length
        if (verseValue < selectedVerse) {
            selectedVerse = verseValue
        }
        setVerseText(chapterVerses[selectedVerse])
        setVerseValue(selectedVerse)

    }, [isVerse])

    useEffect(() => {
        setVerseText(chapterVerses[verseValue])
    }, [verseValue])
    useEffect(() => {
        console.log(selectedBook + 'selected chapter')
    }, [selectedBook])

    useEffect(() => {
        const verses = bibleService.getBookVerses(selectedBook, chapterValue)
        setChapterVerses(verses)
        setVerseText(verses[verseValue - 1])

    }, [chapterValue])

    function setChildSelectedBook(val: any) {
        setSelectedBook(val)
    }


    function setPrevious() {
        const previousBook = bibleService.getPreviousVerse(selectedBook, chapterValue, verseValue, testament)
        setTestament(previousBook.testament)
        setBibleBookList(bibleService.getBookList(previousBook.testament))
        setSelectedBook(previousBook.bookName)
        setChapterValue(previousBook.bookChapter)
        const verses = bibleService.getBookVerses(previousBook.bookName, previousBook.bookChapter)
        setChapterVerses(verses)
        setVerseValue(previousBook.verse)
        setVerseText(verses[verseValue - 1])
    }

    function setNextVerse() {

        const previousBook = bibleService.getNextVerse(selectedBook, chapterValue, verseValue, testament)
        setTestament(previousBook.testament)
        setBibleBookList(bibleService.getBookList(previousBook.testament))
        setSelectedBook(previousBook.bookName)
        setChapterValue(previousBook.bookChapter)
        const verses = bibleService.getBookVerses(previousBook.bookName, previousBook.bookChapter)
        setChapterVerses(verses)
        setVerseValue(previousBook.verse)
        setVerseText(verses[verseValue - 1])
    }


    return (
        <IonContent>
            <IonItem>
                <IonLabel>Select: Testament</IonLabel>
                <IonSelect value={testament} placeholder="Select One" onIonChange={e => setTestament(e.detail.value)}>
                    <IonSelectOption value={TESTAMENTS.OLD_TESTAMENTS}>Old</IonSelectOption>
                    <IonSelectOption value={TESTAMENTS.NEW_TESTAMENTS}>New</IonSelectOption>
                    <IonSelectOption value={TESTAMENTS.ALL_TESTAMENTS}>All</IonSelectOption>

                </IonSelect>
            </IonItem>
            <BookSelection bookList={bibleBookList} selectedBook={selectedBook} setBook={setChildSelectedBook}/>

            <IonCard>

                <IonCardHeader>
                    <IonCardSubtitle>Chapter {chapterValue}, verse {verseValue}</IonCardSubtitle>
                    <IonCardTitle>Book of {selectedBook}</IonCardTitle>
                </IonCardHeader>


                <IonCardContent>
                    {verseText}
                </IonCardContent>
                <IonItem>
                    <IonIcon icon={wine} color={flag} onClick={() => setSaved(!saved)} slot="end"/>
                </IonItem>
            </IonCard>

            <IonItem>

                {isVerse &&
                <IonRange min={1} max={chapterVerses.length - 1} value={verseValue} step={1} pin={true}
                          onIonChange={e => setVerseValue(e.detail.value as number)}>
                    <IonIcon size="small" slot="start" icon={bookOutline}/>
                    <IonButton slot={'end'} onClick={() => setIsVerse(!isVerse)}>Verse</IonButton>
                </IonRange>
                }
                {!isVerse &&
                <IonRange min={1} max={chapterRange} step={1} value={chapterValue} pin={true}
                          onIonChange={e => setChapterValue(e.detail.value as number)}>
                    <IonIcon size="small" slot="start" icon={readerOutline}/>
                    <IonButton slot={'end'} onClick={() => setIsVerse(!isVerse)}>CHAPTER</IonButton>
                </IonRange>
                }

            </IonItem>
            <IonFab vertical="bottom" horizontal="start">
                <IonFabButton color={'next'} onClick={() => setPrevious()}>
                    <IonIcon icon={caretBack}/>
                </IonFabButton>
            </IonFab>

            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton color={'next'} onClick={() => setNextVerse()}>
                    <IonIcon icon={caretForward}/>
                </IonFabButton>
            </IonFab>
        </IonContent>
    );
};

export default BibleSearchTopNav
