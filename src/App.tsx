import React from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header.tsx';
import Catalog from './pages/Catalog/Catalog';
import Book from './pages/Book/Book';
import BookPage from './pages/BookPage/BookPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Scss/main.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/mybooks' element={<Book/>}></Route>
          <Route path='/bookpage/:id' element={<BookPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
