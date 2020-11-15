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
import {BibleService} from "../../services/bible/BibleService";
import BookSelection from "./BookSelection";

function generateDropDown(items: any[]) {
    return items.map((val, index) => {
        return <IonSelectOption value={val.value} key={index}>{val.text}</IonSelectOption>

    })
}


const BibleSearchTopNav: React.FC = () => {
    const [testament, setTestament] = useState('old_testament')
    const [bibleBookList, setBibleBookList] = useState(bibleService.getBookList(testament))
    const [selectedBook, setSelectedBook] = useState(bibleBookList[0])


    const [value, setValue] = useState(1);
    const [verseValue, setVerseValue] = useState(1);
    const [chapterValue, setChapterValue] = useState(1);

    const [isVerse, setIsVerse] = useState(false)

    const [saved, setSaved] = useState(false)
    const [flag, setFlag] = useState('primary')

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

    function setChildSelectedBook(val: any) {
        setSelectedBook(val)
    }

    return (
        <IonContent>
            <IonItem>
                <IonLabel>Select: Testament</IonLabel>
                <IonSelect value={testament} placeholder="Select One" onIonChange={e => setTestament(e.detail.value)}>
                    <IonSelectOption value="old_testament">Old</IonSelectOption>
                    <IonSelectOption value="new_testament">New</IonSelectOption>
                </IonSelect>
            </IonItem>
            <BookSelection bookList={bibleBookList} selectedBook={selectedBook} setBook={setChildSelectedBook}/>

            <IonCard>

                <IonCardHeader>
                    <IonCardSubtitle>Chapter {chapterValue}, verse {verseValue}</IonCardSubtitle>
                    <IonCardTitle>Book of {selectedBook}</IonCardTitle>
                </IonCardHeader>


                <IonCardContent>
                    Early on the first day of the week, while it was still dark, Mary Magdalene went to the tomb and
                    saw
                    that the stone had been removed from the entrance. 2 So she came running to Simon Peter and the
                    other disciple, the one Jesus loved, and said, “They have taken the Lord out of the tomb, and we
                    don’t know where they have put him!”
                </IonCardContent>
                <IonItem>
                    <IonIcon icon={wine} color={flag} onClick={() => setSaved(!saved)} slot="end"/>
                </IonItem>
            </IonCard>

            <IonItem>

                {isVerse &&
                <IonRange min={1} max={80} value={verseValue} step={1} pin={true}
                          onIonChange={e => setVerseValue(e.detail.value as number)}>
                    <IonIcon size="small" slot="start" icon={bookOutline}/>
                    <IonButton slot={'end'} onClick={() => setIsVerse(!isVerse)}>Verse</IonButton>
                </IonRange>
                }
                {!isVerse &&
                <IonRange min={1} max={20} step={1} value={chapterValue} pin={true}
                          onIonChange={e => setChapterValue(e.detail.value as number)}>
                    <IonIcon size="small" slot="start" icon={readerOutline}/>
                    <IonButton slot={'end'} onClick={() => setIsVerse(!isVerse)}>CHAPTER</IonButton>
                </IonRange>
                }


            </IonItem>

        </IonContent>
    );
};

export default BibleSearchTopNav
