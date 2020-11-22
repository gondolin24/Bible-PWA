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


const BibleSearchTopNav: React.FC = () => {
    const bibleService = DI_CONTAINER.container.BibleService
    //initial values

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
        setSelectedBook(bookList[0])
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
    }, [isVerse])

    useEffect(() => {
        setVerseText(chapterVerses[verseValue])
    }, [verseValue])


    useEffect(() => {
        const verses = bibleService.getBookVerses(selectedBook, chapterValue)
        setChapterVerses(verses)
        setVerseText(verses[verseValue - 1])

    }, [chapterValue])

    function setChildSelectedBook(val: any) {
        setSelectedBook(val)
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
                <IonFabButton color={'next'}>
                    <IonIcon icon={caretBack}/>
                </IonFabButton>
            </IonFab>

            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton color={'next'}>
                    <IonIcon icon={caretForward}/>
                </IonFabButton>
            </IonFab>
        </IonContent>
    );
};

export default BibleSearchTopNav
