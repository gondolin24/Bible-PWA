import React from 'react';
import {
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

interface ContainerProps {
    name: string;
}

const SavedVersesPage: React.FC<ContainerProps> = ({name}) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Bible Reader</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonLabel>John 34</IonLabel>

                    <IonCheckbox slot="start" color="primary"/>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default SavedVersesPage;
