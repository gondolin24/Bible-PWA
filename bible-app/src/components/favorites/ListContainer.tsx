import React from 'react';
import {IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";

const globalPersist = DI_CONTAINER.container.GlobalPersister

const ListContainer: React.FC = () => {

   let savedItems = globalPersist.globalObject.savedVerses.map((verse: any, index: any) => {
        return (
            <IonItem key={index}>
                <IonLabel>
                    <h2>{verse.book}</h2>
                    <h3>Chapter {verse.chapter} Verse {verse.verse}</h3>
                </IonLabel>
            </IonItem>
        )
    })


    if(savedItems.length===0){
        savedItems =  (
            <IonItem>
                <IonLabel>
                    <h3>
                    No saved verses
                    </h3>
                </IonLabel>
            </IonItem>

        )
    }


    return (
        <IonContent fullscreen>
            <IonList>
                {savedItems}
            </IonList>
        </IonContent>
    );
};

export default ListContainer;
