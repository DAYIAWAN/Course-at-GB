import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const links = [
  {
    title: 'Главная',
    to: '/',
  },
  {
    title: 'Каталог',
    to: '/catalog',
  },
  {
    title: 'О магазине',
    to: '/about',
  },
  {
    title: 'Контакты',
    to: '/contacts',
  },
];

function isActive(location, to) {
  if (!location) return false;
  return location.pathname === to;
}

const NavbarMain = (props) => (
  <ul className="navbar-nav mr-auto">
    {
        links.map((link) => (
          <li className={clsx('nav-item', isActive(props.location, link.to) && 'active')} key={link.title}>
            <Link className="nav-link" to={link.to}>
              {link.title}
            </Link>
          </li>
        ))
      }
  </ul>
);

NavbarMain.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(NavbarMain);
