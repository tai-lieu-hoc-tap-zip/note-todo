import React, { useState } from 'react';
import './Navigation.scss'
import { ReactComponent as CalendarIcon } from '../../assert/logo/calendar.svg';
import { ReactComponent as ListIcon } from '../../assert/logo/list.svg';
import { ReactComponent as GearIcon } from '../../assert/logo/gear.svg';
import { ReactComponent as UserIcon } from '../../assert/logo/user.svg';
import { ReactComponent as DashBoardIcon } from '../../assert/logo/dashboard.svg';
import IconNavigation from '../IconNavigation'

Navigation.propTypes = {
    
};

let objIcon = [
    { 'id': 0, 'object': <DashBoardIcon className="flex-navigation__item__image" />, 'title': 'Dash Board' },
    { 'id': 1, 'object': <ListIcon className="flex-navigation__item__image" />, 'title': 'Task' },
    { 'id': 2, 'object': <CalendarIcon className="flex-navigation__item__image" />, 'title': 'Calendar' },
    { 'id': 3, 'object': <UserIcon className="flex-navigation__item__image" />, 'title': 'User' },
    { 'id': 4, 'object': <GearIcon className="flex-navigation__item__image" />, 'title': 'Setting' },
]

function Navigation() {

    const [ active, setActive] = useState([true, false, false, false, false]);  

    function handleActive(index) { 
        let newActive = [false, false, false, false, false];
        newActive[index] = true;
        console.log(newActive);
        setActive(newActive); 
    }

    function buildNavigation() {
        return ( 
            objIcon.map((item) => (
                <IconNavigation
                    key={item.id} 
                    active={active[item.id]}
                    handleActive={() => handleActive(item.id)}
                    handleIcon={<>{(item.object)}</> }
                    title={item.title} />
            ))
        );
    }

    return ( 
        <div className="home-container__navigation flex-navigation"> 
            {buildNavigation()}
          </div>
    );
}

export default Navigation;