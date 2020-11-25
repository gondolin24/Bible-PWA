import React, {useState} from 'react';
import {IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";
import DI_CONTAINER from "../../d-i-containers/DependencyInjection";


interface ListItemProps {
    book: string,
    chapter: number,
    verse: number,
    setVerseState: (list: any[])=>void
}

const BibleService = DI_CONTAINER.container.BibleService
const globalPersiter = DI_CONTAINER.container.GlobalPersister

const FavListItem: React.FC<ListItemProps> = (props) => {

    const bibleVerseText = BibleService.getVerseText(props.book, props.chapter, props.verse)

    function deleteItem() {

        const filtered = globalPersiter.globalObject.savedVerses.filter((obj: any) => {
            return !(obj.book === props.book && obj.verse === props.verse && obj.chapter === props.chapter)
        })
        props.setVerseState(filtered)
        globalPersiter.saveSavedVerses(filtered)
            .then()
            .catch((e: any) => {
                console.log(e)
            })
    }

    return (
        <IonItemSliding>
            <IonItem>
                {/*<IonAvatar slot={'start'}>*/}
                {/*    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>*/}
                {/*</IonAvatar>*/}
                <IonLabel>
                    <h2>{props.book}</h2>
                    <h3>Chapter {props.chapter} Verse {props.verse}</h3>
                    <p>{bibleVerseText}</p>

                </IonLabel>
            </IonItem>

            <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => deleteItem()}>Delete</IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
};

export default FavListItem;
