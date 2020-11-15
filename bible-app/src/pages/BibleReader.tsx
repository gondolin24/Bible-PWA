import React from 'react';
import {IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import BibleSearchTopNav from "../components/search/BibleSearchTopNav";

interface ContainerProps {
    name: string;
}

const BibleReaderPage: React.FC<ContainerProps> = ({name}) => {

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
                    {'Reader page'}
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default BibleReaderPage;
