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
const globalPersiter = DI_CONTAINER.container.GlobalPersister


const BibleSearchTopNav: React.FC = () => {
        console.log(globalPersiter.globalObject)
        const [testament, setTestament] = useState(TESTAMENTS.OLD_TESTAMENTS)
        const [bibleBookList, setBibleBookList] = useState(bibleService.getBookList(testament))
        const [selectedBook, setSelectedBook] = useState(bibleBookList[0])
        const [chapterVerses, setChapterVerses] = useState<string[]>([])

        const [verseValue, setVerseValue] = useState(1);
        const [chapterValue, setChapterValue] = useState(1);

        const [isVerse, setIsVerse] = useState(false)

        const [flag, setFlag] = useState('primary')
        const [chapterRange, setChapterRange] = useState(30)
        const [verseText, setVerseText] = useState(bibleService.getInitialVerse(selectedBook))

        const [savedVerses, setSavedVerses] = useState<any>(globalPersiter.globalObject.savedVerses)

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
        }, [selectedBook])

        useEffect(() => {
            const verses = bibleService.getBookVerses(selectedBook, chapterValue)
            setChapterVerses(verses)
            setVerseText(verses[verseValue - 1])

        }, [chapterValue])

        function setChildSelectedBook(val: any) {
            setSelectedBook(val)
        }


        function setNewVerse(newVerse: any) {
            setTestament(newVerse.testament)
            setBibleBookList(bibleService.getBookList(newVerse.testament))
            setSelectedBook(newVerse.bookName)
            setChapterValue(newVerse.bookChapter)
            const verses = bibleService.getBookVerses(newVerse.bookName, newVerse.bookChapter)
            setChapterVerses(verses)
            setVerseValue(newVerse.verse)
            setVerseText(verses[verseValue - 1])
        }

        function setPrevious() {
            const prevVerse: any = bibleService.getPreviousVerse(selectedBook, chapterValue, verseValue, testament)
            setNewVerse(prevVerse)

        }

        function setNextVerse() {
            const nextVerse: any = bibleService.getNextVerse(selectedBook, chapterValue, verseValue, testament)
            setNewVerse(nextVerse)
        }

        function setSavedObject() {
            const toSaveObj = {
                book: selectedBook,
                verse: verseValue,
                chapter: chapterValue
            }

            const exists = savedVerses.some((obj: any) => {
                return obj.book === selectedBook && obj.verse === verseValue && obj.chapter === chapterValue
            })
            const filtered = savedVerses.filter((obj: any) => {
                return !(obj.book === selectedBook && obj.verse === verseValue && obj.chapter === chapterValue)
            })
            let verseToSave = []
            if (exists) {
                verseToSave = filtered
                setSavedVerses([...verseToSave])
            } else {
                verseToSave = [...savedVerses, toSaveObj]
                setSavedVerses(verseToSave)
            }
            globalPersiter.saveSavedVerses(verseToSave)
                .then()
                .catch((e: any) => {
                    console.log(e)
                })
        }

        useEffect(() => {
            const isSaved = savedVerses.some((obj: any) => {
                return obj.book === selectedBook && obj.verse === verseValue && obj.chapter === chapterValue
            })

            if (!isSaved) {
                setFlag('primary')

            } else {
                setFlag('warning')
            }
        })


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
                        <IonIcon icon={wine} color={flag} onClick={() => setSavedObject()} slot="end"/>
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
    }
;

export default BibleSearchTopNav
