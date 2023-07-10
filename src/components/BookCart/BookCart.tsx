import React from 'react';
import styles from './book-cart.module.scss';

type BookCartProps = {
    image: string,
    title: string,
    autor: any,
};

const BookCart = ({image, title, autor}: BookCartProps) => {
    return (
        <div className={styles.cart}>
            <img className={styles.image} src={image !== '' ? image : ''} alt="Book-img" />
            <h2 className={styles.title}>{title}</h2>
            <h4 className={styles.author}>{    
            autor.map((element: {name: string}) => {
                return element.name;
            })}</h4>
        </div>
    );
};

export default BookCart;