import React from 'react';
import Navigation from '../Navigation';
import TaskList from '../TaskList';
import './HomeContainer.scss'

HomeContainer.propTypes = {

};

function HomeContainer(props) {
    return (
        <div className="home-container container-fluid row">
            <Navigation />
            <TaskList />
        </div >
    );
}

export default HomeContainer;