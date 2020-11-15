import React from 'react';
import {IonItem, IonLabel, IonSelect, IonSelectOption} from "@ionic/react";

function generateDropDown(items: any[]) {
    return items.map((book) => {
        return {
            value: book,
            text: book
        }
    }).map((val, index) => {
        const key = `${index}${val.text}`
        return <IonSelectOption value={val.value} key={key}>{val.text}</IonSelectOption>
    })
}

interface BookSelectionProps {
    bookList: String[]
    setBook: (val: String) => void,
    selectedBook: String
}

const BookSelection: React.FC<BookSelectionProps> = (props) => {
    const bookDropDownList = generateDropDown(props.bookList)

    return (
        <IonItem>
            <IonLabel>Select: Book</IonLabel>
            <IonSelect value={props.selectedBook} placeholder="Select One"
                       onIonChange={e => props.setBook(e.detail.value)}>
                {bookDropDownList}
            </IonSelect>
        </IonItem>

    );
};

export default BookSelection
