import React from 'react';
import classes from './MeetingPage.module.css'

export const MeetingPage = () => {

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;

    return (
        <div className={classes.container}>
            <div className={classes.date}>
                <h1>{today}</h1>
            </div>
            <h2>Встречи</h2>
            <h3>Заполнить заново</h3>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
            <h3>Сохранить</h3>
            <h2>Итог встреч</h2>
        </div>
    );
};
