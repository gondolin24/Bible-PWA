import React, {useEffect, useState} from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonRange,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {bookOutline, readerOutline, wine} from "ionicons/icons";

const BibleSearchTopNav: React.FC = () => {
    const [testament, setTestament] = useState('old_testament')
    const [book, setBook] = useState('John')
    const [value, setValue] = useState(1);
    const [verseValue, setVerseValue] = useState(1);
    const [chapterValue, setChapterValue] = useState(1);

    const [isVerse, setIsVerse] = useState(false)
    const oldie = [{
        value: 'John',
        text: 'John'
    },
        {
            value: 'Mark',
            text: 'Mark'
        }
    ].map((val, index) => {
        return <IonSelectOption value={val.value} key={index}>{val.text}</IonSelectOption>

    })

    const newE = [{
        value: 'Eduardo',
        text: 'Eduardo'
    },
        {
            value: 'Job',
            text: 'Job'
        }
    ].map((val, index) => {
        return <IonSelectOption value={val.value} key={index}>{val.text}</IonSelectOption>

    })

    const [options, setOptions] = useState(oldie)


    useEffect(() => {

        if (testament === 'old_testament') {
            setOptions(oldie)
            setBook('John')

        } else {
            setOptions(newE)
            setBook('Eduardo')
        }

    }, [testament])

    return (
        <IonContent>
            <IonItem>
                <IonLabel>Select: Testament</IonLabel>
                <IonSelect value={testament} placeholder="Select One" onIonChange={e => setTestament(e.detail.value)}>
                    <IonSelectOption value="old_testament">Old</IonSelectOption>
                    <IonSelectOption value="new_testament">New</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem>
                <IonLabel>Select: Book</IonLabel>
                <IonSelect value={book} placeholder="Select One" onIonChange={e => setBook(e.detail.value)}>
                    {options}
                </IonSelect>
            </IonItem>


            <IonCard>

                <IonCardHeader>
                    <IonCardSubtitle>Chapter {chapterValue}, verse {verseValue}</IonCardSubtitle>
                    <IonCardTitle>Book of {book}</IonCardTitle>
                </IonCardHeader>


                <IonCardContent>
                    Early on the first day of the week, while it was still dark, Mary Magdalene went to the tomb and saw
                    that the stone had been removed from the entrance. 2 So she came running to Simon Peter and the
                    other disciple, the one Jesus loved, and said, “They have taken the Lord out of the tomb, and we
                    don’t know where they have put him!”
                </IonCardContent>
                <IonItem>
                    <IonIcon icon={wine} color={'primary'} slot="end"/>
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
