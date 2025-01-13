import React from 'react';
import Heading from '../components/Heading/Index'
import Header from '../components/Header/Index';
import MenuManager from '../components/Menu/MenuManager/Index';

const Home = () => {

    return (
        <MenuManager>
            <Header />
            <Heading />
        </MenuManager>
    );
};

export default Home;
