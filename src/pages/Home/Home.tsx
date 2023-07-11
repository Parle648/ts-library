import React from 'react';
import BookList from '../../modules/BookList/BookList';

const Home = React.memo(() => {
    return (
        <div>
            <BookList link='?topic=classic'/>
            <BookList link='?topic=children'/>
            <BookList link='?languages=es'/>
        </div>
    );
})

export default Home;