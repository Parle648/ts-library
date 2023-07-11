import React from 'react';
import styles from './book-cart.module.scss';
import { Link } from 'react-router-dom';

type BookCartProps = {
    id: number,
    image: string,
    title: string,
    autor: any,
    format: string,
};

const BookCart = ({id, image, title, autor, format}: BookCartProps) => {
    return (
        <Link to={`/bookpage/:${id}`}>
            <div className={styles.cart} id={id.toString()}>
                <img className={styles.image} src={format} alt="Book-img" />
                <h2 className={styles.title}>{title}</h2>
                <h4 className={styles.author}>{    
                autor.map((element: {name: string}) => {
                    return element.name;
                })}</h4>
            </div>
        </Link>
    );
};

export default BookCart;