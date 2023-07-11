import React from 'react';
import BookCart from '../../components/BookCart/BookCart';
import styles from './book-list.module.scss';
import axios from 'axios';

type ComponenttProps = {
    link: string,
};

type BookListProps = {
    config: object,
    data: {results: []},
    headers: object,
    status: number,
    statusText: string,
};

type Book = {
    id: number,
    title: string,
    authors: {
        author: {name: string,}
    },
    formats: {
        "image/jpeg": string,
    }
};

const BookList = ({link}: ComponenttProps) => {
    const [bookList, setbookList] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://gutendex.com/books${link}`)
        .then((req: BookListProps) => setbookList(req.data.results))
    }, [link]);

    return (
        <div className={styles.list}>
            {bookList.length !== 0 && bookList.map((book: Book) => {
                return <BookCart key={book.id} format={book.formats['image/jpeg']} id={book.id} title={book.title} autor={book.authors} image=''/>
            })}
        </div>
    );
};

export default BookList;