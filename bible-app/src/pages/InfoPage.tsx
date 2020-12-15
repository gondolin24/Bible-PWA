import React from 'react';
import './Page.css';
import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const InfoPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>
                        {'App Version V.1.3.0'}
                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardContent>
                        Thank you for downloading this app.
                        This is a free and ad free version of the New King James Version of the Holy Bible.
                        All features are free and I will never charge a penny.
                        Active development as more features will be added.
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    )
};

export default InfoPage;
