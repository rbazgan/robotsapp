import React from 'react';
import CardList from './Card/CardList.js';
import {robots} from './Robots/robots.js';

const App = () => {
    return ( 
        <CardList robots = {robots} />
    );
} 

export default App;