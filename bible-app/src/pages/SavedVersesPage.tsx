import React from 'react';
import {IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import ListContainer from "../components/favorites/ListContainer";
import DI_CONTAINER from "../d-i-containers/DependencyInjection";

const globalPersiter = DI_CONTAINER.container.GlobalPersister

const SavedVersesPage: React.FC = () => {



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Saved Verses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <ListContainer/>

        </IonPage>
    );
};

export default SavedVersesPage;
