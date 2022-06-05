import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Book from "./components/Pages/Book";
import About from "./components/Pages/About";
import Offers from "./components/Pages/Offers";
import Contact from "./components/Pages/Contact";
import './styles/main.scss';


const root = ReactDOM.createRoot(
    document.getElementById("root") || document.body
);

root.render(
    <BrowserRouter>
        <div className={'content'}>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/book' element={<Book/>} />
                <Route path='/offers' element={<Offers/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    </BrowserRouter>
);