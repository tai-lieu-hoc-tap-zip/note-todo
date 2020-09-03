import React, { useState } from 'react';
import './Navigation.scss';
import { ReactComponent as CalendarIcon } from '../../assert/logo/calendar.svg';
import { ReactComponent as ListIcon } from '../../assert/logo/list.svg';
import { ReactComponent as GearIcon } from '../../assert/logo/gear.svg';
import { ReactComponent as UserIcon } from '../../assert/logo/user.svg';
import { ReactComponent as DashBoardIcon } from '../../assert/logo/dashboard.svg';
import IconNavigation from '../IconNavigation';
import Avatar from '../../assert/avatar/user.jpg';

Navigation.propTypes = {};

let objIcon = [
  {
    id: 0,
    object: <DashBoardIcon className="flex-navigation__item__image" />,
    title: 'Dash Board',
    href: '#dashboard',
  },
  {
    id: 1,
    object: <ListIcon className="flex-navigation__item__image" />,
    title: 'Task',
    href: '#task',
  },
  {
    id: 2,
    object: <CalendarIcon className="flex-navigation__item__image" />,
    title: 'Calendar',
    href: '#calendar',
  },
  {
    id: 3,
    object: <UserIcon className="flex-navigation__item__image" />,
    title: 'User',
    href: '#user',
  },
  {
    id: 4,
    object: <GearIcon className="flex-navigation__item__image" />,
    title: 'Setting',
    href: '#setting',
  },
];

function Navigation() {
  const user = { name: 'Tamaki' };
  const [active, setActive] = useState([true, false, false, false, false]);

  function handleActive(index: number) {
    let newActive = [false, false, false, false, false];
    newActive[index] = true;
    setActive(newActive);
  }

  function buildNavigation() {
    return objIcon.map((item) => (
      <IconNavigation
        key={item.id}
        active={active[item.id]}
        handleActive={() => handleActive(item.id)}
        handleIcon={<>{item.object}</>}
        title={item.title}
        url={item.href}
      />
    ));
  }

  return (
    <div className="home-container__navigation flex-navigation">
      <div className="flex-navigation__avatar">
        <img
          className="flex-navigation__avatar__image"
          alt="Avatar"
          src={Avatar}
        ></img>
        <a href="#avatar" className="flex-navigation__avatar__name">
          {user.name}
        </a>
      </div>
      {buildNavigation()}
    </div>
  );
}

export default Navigation;
