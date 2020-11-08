import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import {useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import ExplorePage from "./BibleSearchPage";

const Page: React.FC = () => {

    const {name} = useParams<{ name: string; }>();

    console.log(name)

    if (name === 'Explorer') {
        return <ExplorePage name={name}/>
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
};

export default Page;
