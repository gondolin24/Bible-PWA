import React from 'react';
import {useParams} from 'react-router';
import './Page.css';
import ExplorePage from "./BibleSearchPage";
import SavedVersesPage from "./SavedVersesPage";
import BibleReaderPage from "./BibleReader";

const Page: React.FC = () => {

    const {name} = useParams<{ name: string; }>();

    console.log(name)

    if (name === 'Explorer') {
        return <ExplorePage name={name}/>
    }
    if (name === 'Reader') {
        return <BibleReaderPage name={name}/>
    }
    if (name === 'Saved') {
        return <SavedVersesPage name={name}/>
    }
    return <BibleReaderPage name={name}/>

};

export default Page;
