import React from 'react';
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import BibleSearchTopNav from "../components/reader/BibleSearchTopNav";

interface ContainerProps {
    name: string;
}

const ExplorePage: React.FC<ContainerProps> = ({name}) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Bible Explorer</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <BibleSearchTopNav/>
            </IonContent>
        </IonPage>
    );
};

export default ExplorePage;
