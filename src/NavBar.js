import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarItem({ title, icon, to }) {
  return (
    <li className="tab-links">
      <NavLink to={to}>
        <span className="icon is-small">
          <i className={icon} aria-hidden="true"></i>
        </span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

const items = [
  {
    title: 'Colors',
    icon: 'fas fa-paint-brush',
    to: '/colors',
  },
  {
    title: 'Images',
    icon: 'fas fa-images',
    to: '/images',
  },
  {
    title: 'Backgrounds',
    icon: 'fas fa-image',
    to: '/backgrounds',
  },
  {
    title: 'CSS',
    icon: 'fab fa-css3-alt',
    to: '/css',
  },
  {
    title: 'HTML',
    icon: 'fab fa-html5',
    to: '/html',
  },
  {
    title: 'Inspiration',
    icon: 'far fa-lightbulb',
    to: '/inspiration',
  },
  {
    title: 'Javascript',
    icon: 'fab fa-js-square',
    to: '/javascript',
  },
  {
    title: 'Articles',
    icon: 'fas fa-book',
    to: '/articles',
  },
];

export default function NavBar() {
  return (
    <div className="tabs is-centered">
      <ul>
        {items.map(data => (
          <NavbarItem {...data} key={data.to} />
        ))}
      </ul>
    </div>
  );
}
