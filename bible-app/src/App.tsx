import Menu from './components/Menu';
import React, {useEffect, useState} from 'react';
import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import DI_CONTAINER from "./d-i-containers/DependencyInjection";
import ExplorePage from "./pages/BibleSearchPage";
import {GlobalPersistedObject} from "./data-models/GlobalPersistedObject";


const App: React.FC = () => {
    const persister = DI_CONTAINER.container.GlobalPersister
    const savedVerse = [{
        book: 'Genesis',
        verse: 1,
        chapter: 1
    }
    ]

    const [inital, setInitial] = useState(true);
    const [appMetaData, setAppMetaData] = useState(GlobalPersistedObject.initial());

    useEffect(() => {

        persister.getData(inital).then(() => {
            setAppMetaData(persister.globalObject)
        }).catch((e: any) => {
            console.log(e)
        })
        setInitial(false)

    }, [inital])


    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu/>
                    <IonRouterOutlet id="main">
                        <Route path="/page/Explorer"
                               component={() => (
                                   <ExplorePage name={'Explorer'} savedVerses={savedVerse}/>
                               )}
                               exact={true}/>
                        <Redirect from="/" to="/page/Explorer" exact/>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
