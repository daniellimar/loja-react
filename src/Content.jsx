import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';

export const Content = () => {
    return (
        <Routes>
            <Route exact path='/cart' Component={ Cart } />
            <Route exact path='/' Component={ Store } />
        </Routes>
    )
}