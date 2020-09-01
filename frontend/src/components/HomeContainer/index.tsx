import React from 'react';
import Navigation from '../Navigation';
import Board from '../Board';
import './HomeContainer.scss'

HomeContainer.propTypes = {

};

function HomeContainer() {
    return (
        <div className="home-container container-fluid row">
            <Navigation />
            <Board />
        </div >
    );
}

export default HomeContainer;