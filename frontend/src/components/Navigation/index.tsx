import React from 'react';
import './Navigation.scss'
import { ReactComponent as CalendarIcon } from '../../assert/logo/calendar.svg';
import { ReactComponent as ListIcon } from '../../assert/logo/list.svg';
import { ReactComponent as GearIcon } from '../../assert/logo/gear.svg';
import { ReactComponent as UserIcon } from '../../assert/logo/user.svg';
import { ReactComponent as DashBoardIcon } from '../../assert/logo/dashboard.svg';
Navigation.propTypes = {

};

function Navigation() {
    return (

        <div className="home-container__navigation flex-navigation">
            <a href="#v" id='target1' className="flex-navigation__item target"><DashBoardIcon className="flex-navigation__item__image" />Dash Board</a>
            <a href="#v" id='target2' className="flex-navigation__item target"><ListIcon className="flex-navigation__item__image" />Task</a>
            <a href="#v" id='target3' className="flex-navigation__item target"><CalendarIcon className="flex-navigation__item__image" />Calendar</a>
            <a href="#v" id='target4' className="flex-navigation__item target"><UserIcon className="flex-navigation__item__image" />User</a>
            <a href="#v" id='target5' className="flex-navigation__item target"><GearIcon className="flex-navigation__item__image" />Setting</a>
        </div>
    );
}

export default Navigation;