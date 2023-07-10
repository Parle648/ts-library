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
    title: string,
    authors: Array<{ name: string}>,
    formats: any,
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
                return <BookCart title={book.title} autor={book.authors} image=''/>
            })}
        </div>
    );
};

export default BookList;