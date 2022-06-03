import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import React from 'react';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    );
}
export default Main;