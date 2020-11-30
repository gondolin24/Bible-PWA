import React, {useEffect, useState} from 'react';
import {IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";

const globalPersist = DI_CONTAINER.container.GlobalPersister

const ListContainer: React.FC = () => {

    const [savedVerse, setSavedVerse] = useState(globalPersist.globalObject.savedVerses)

    const [renderedVerses, setRenderedVerse] = useState()

    const randomOnClick = (selectedVerse: any) => {
        console.log(selectedVerse)
        console.log(savedVerse)

        const newVerses = savedVerse.filter((verse: any) => (verse !== selectedVerse))
        // verse.book !== selectedVerse.book && verse.chapter !== selectedVerse.chapter && verse.verse !== selectedVerse.verse)
        console.log(newVerses)

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
                    <IonItem key={index} onClick={() => randomOnClick(verse)}>
                        <IonLabel>
                            <h2>{verse.book}</h2>
                            <h3>Chapter {verse.chapter} Verse {verse.verse}</h3>
                        </IonLabel>
                    </IonItem>
                )
            })
        }
        setRenderedVerse(savedItems)
    }, [savedVerse])


    return (
        <IonContent fullscreen>
            <IonList>
                {renderedVerses}
            </IonList>
        </IonContent>
    );
};

export default ListContainer;
