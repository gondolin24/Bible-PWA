import React, {useEffect, useState} from 'react';
import './ExploreContainer.css';
import {
    IonButton,
    IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {pin, walk, warning, wifi, wine} from "ionicons/icons";

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({name}) => {

    const [testament, setTestament] = useState('old_testament')

    return (
        <IonContent>
            <IonItem>
                <IonLabel>Select: Testament</IonLabel>
                <IonSelect value={testament} placeholder="Select One" onIonChange={e => setTestament(e.detail.value)}>
                    <IonSelectOption value="old_testament">Old Testament</IonSelectOption>
                    <IonSelectOption value="new_testament">New Testament</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonLabel>

            </IonLabel>

            <IonLabel>

                {`${testament} selected`}

            </IonLabel>

            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonItem>
                    <IonIcon icon={pin} slot="start"/>
                    <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                    <IonButton fill="outline" slot="end">View</IonButton>
                </IonItem>

                <IonCardContent>
                    This is content, without any paragraph or header tags,
                    within an ion-cardContent element.
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonItem href="#" className="ion-activated">
                    <IonIcon icon={wifi} slot="start"/>
                    <IonLabel>Card Link Item 1 activated</IonLabel>
                </IonItem>

                <IonItem href="#">
                    <IonIcon icon={wine} slot="start"/>
                    <IonLabel>Card Link Item 2</IonLabel>
                </IonItem>

                <IonItem className="ion-activated">
                    <IonIcon icon={warning} slot="start"/>
                    <IonLabel>Card Button Item 1 activated</IonLabel>
                </IonItem>

                <IonItem>
                    <IonIcon icon={walk} slot="start"/>
                    <IonLabel>Card Button Item 2</IonLabel>
                </IonItem>
            </IonCard>

        </IonContent>
    );
};

export default ExploreContainer;
