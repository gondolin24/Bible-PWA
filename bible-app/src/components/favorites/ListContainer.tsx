import React, {useEffect, useState} from 'react';
import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonModal, IonTitle,
    IonToolbar
} from "@ionic/react";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";
import {chevronBack} from "ionicons/icons";

const globalPersist = DI_CONTAINER.container.GlobalPersister
const bibleService = DI_CONTAINER.container.BibleService

const ListContainer: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [savedVerse, setSavedVerse] = useState(globalPersist.globalObject.savedVerses)

    const [renderedVerses, setRenderedVerse] = useState()
    const [modalData, setModalData] = useState({book: '', chapter: '', verse: '', verseText: ''})


    const removeVerse = (selectedVerse: any) => {
        const newVerses = savedVerse.filter((verse: any) => (verse !== selectedVerse))
        globalPersist.saveSavedVerses(newVerses).then().catch()
        setSavedVerse(newVerses)
    }

    useEffect(() => {
        let savedItems: any = []

        if (savedVerse.length === 0) {
            savedItems = [(
                <IonItem key={Math.random()}>
                    <IonLabel>
                        <h3>
                            No saved verses
                        </h3>
                    </IonLabel>
                </IonItem>

            )]
        } else {
            savedItems = savedVerse.map((verse: any, index: any) => {
                return (
                    <IonItemSliding key={index}>

                        <IonItem onClick={() => modalAction(verse)}>
                            <IonLabel>
                                <h2>{verse.book}</h2>
                                <h3>Chapter {verse.chapter} Verse {verse.verse}</h3>
                            </IonLabel> </IonItem>

                        <IonItemOptions side="end">
                            <IonItemOption color="danger" onClick={() => removeVerse(verse)}>Remove</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                )
            })
        }
        setRenderedVerse(savedItems)
    }, [savedVerse])

    useEffect(() => {
        const vv = globalPersist.globalObject.savedVerses
        setSavedVerse(vv)
    })

    const modalAction = (selectedVerse: any) => {
        setShowModal(true)
        const modalFieldData = Object.assign(selectedVerse)
        modalFieldData.verseText = bibleService.getVerseText(selectedVerse.book, selectedVerse.chapter, selectedVerse.verse)
        setModalData(modalFieldData)
    }

    return (
        <IonContent fullscreen>
            <IonList>
                {renderedVerses}

                <IonItemSliding key={'demo'}>
                    <IonItem>
                        <IonLabel>
                            To Remove
                        </IonLabel>
                        <IonIcon size="large" slot="end" icon={chevronBack}/>
                    </IonItem>
                    <IonItemOptions side="end">
                        <IonItemOption color="danger">Remove</IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
            </IonList>
            <IonModal isOpen={showModal}>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonButtons slot="primary">
                            <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard>

                        <IonCardHeader>
                            <IonCardSubtitle>Chapter {modalData.chapter}, verse {modalData.verse}</IonCardSubtitle>
                            <IonCardTitle>Book of {modalData.book}</IonCardTitle>
                        </IonCardHeader>


                        <IonCardContent>
                            {modalData.verseText}
                        </IonCardContent>
                    </IonCard>
                </IonContent>


            </IonModal>
        </IonContent>
    );
};

export default ListContainer;
