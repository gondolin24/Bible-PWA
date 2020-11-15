import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import React from 'react';
import {useLocation} from 'react-router-dom';
import {bookmarkOutline, bookSharp, leafOutline, leafSharp, searchOutline, searchSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'read',
        url: '/page/Reader',
        iosIcon: leafOutline,
        mdIcon: leafSharp
    },
    {
        title: 'Saved Verses',
        url: '/page/Saved',
        iosIcon: bookmarkOutline,
        mdIcon: bookSharp
    },
    {
        title: 'Find',
        url: '/page/Explorer',
        iosIcon: searchOutline,
        mdIcon: searchSharp
    }
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Inbox</IonListHeader>
                    <IonNote>hi@ionicframework.com</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''}
                                         routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon}/>
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>

            </IonContent>
        </IonMenu>
    );
};

export default Menu;
