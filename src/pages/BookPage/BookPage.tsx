import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

type bookDataType = {
    id: number,
    title: string,
    subjects: string[],
    authors: Array<{
        name: string,
        birth_year: number | undefined,
        death_year: number | undefined,
    }>,
    bookshelves: string[],
    languages: string[],
    media_type: string,
    translators: Array<{
        name: string,
        birth_year: number | undefined,
        death_year: number | undefined,
    }>,
    formats: {
        "image/jpeg": string,
    }
}

const BookPage = (props: any) => {
    const { id } = useParams();
    const [bookData, setBookdata] = React.useState<bookDataType>()

    React.useEffect(() => {
        axios.get(`https://gutendex.com/books?ids=${id?.slice(1, id.length)}`)
        .then((result: {data: {results: [book: bookDataType]}}) => setBookdata(result.data.results[0]))
    }, [id])

    console.log(bookData?.formats['image/jpeg']);

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{bookData?.title}</h2>
            {bookData?.authors.map((author) => <h2 style={{textAlign: 'center', color: 'orangered'}}>{author.name}</h2>)}
            <div className="" style={{width: '280px', display: 'flex', justifyContent: 'space-between', margin: '0 auto'}}>
                <span>birth year - {bookData?.authors[0]?.birth_year}</span>
                <span>death year - {bookData?.authors[0]?.death_year}</span>
            </div>
            <img src={bookData?.formats['image/jpeg']} alt=""  style={{margin: '20px auto', display: 'block', border: '1px solid #000'}}/>
            {bookData?.translators.map((author) => <h2 style={{textAlign: 'center', color: 'green'}}>{author.name}</h2>)}
        </div>
    );
};

export default BookPage;