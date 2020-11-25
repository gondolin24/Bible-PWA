import React from 'react';
import {IonContent, IonItem} from "@ionic/react";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";

const globalPersist = DI_CONTAINER.container.GlobalPersister

const ListContainer: React.FC = () => {


    return (
        <IonContent fullscreen>
            <IonItem>
                {'coming soon'}
            </IonItem>
        </IonContent>
    );
};

export default ListContainer;
