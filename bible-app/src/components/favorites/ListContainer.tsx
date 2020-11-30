import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList
} from "@ionic/react";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";
import {bookOutline, chevronBack} from "ionicons/icons";

const globalPersist = DI_CONTAINER.container.GlobalPersister

const ListContainer: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [savedVerse, setSavedVerse] = useState(globalPersist.globalObject.savedVerses)

    const [renderedVerses, setRenderedVerse] = useState()
    const [selectedVerse, setSelectedVerse] = useState({})


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

                        <IonItem>
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
        </IonContent>
    );
};

export default ListContainer;
