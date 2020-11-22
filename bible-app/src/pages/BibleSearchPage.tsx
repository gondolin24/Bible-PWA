import React from 'react';
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import BibleSearchTopNav from "../components/search/BibleSearchTopNav";

interface ContainerProps {
    name: string;
    savedVerses: any[];
}

const ExplorePage: React.FC<ContainerProps> = (props) => {

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
                        <IonTitle size="large">{props.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <BibleSearchTopNav savedVerses={props.savedVerses}/>
            </IonContent>
        </IonPage>
    );
}

export default ExplorePage;
