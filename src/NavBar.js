import React from 'react';
import {
  FaPaintBrush,
  FaImages,
  FaImage,
  FaCss3Alt,
  FaHtml5,
  FaLightbulb,
  FaJsSquare,
  FaBook,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { Icon } from './components';

function NavbarItem({ title, icon, to }) {
  return (
    <li className="tab-links">
      <NavLink to={to}>
        <Icon size="small" icon={icon} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

const items = [
  {
    title: 'Colors',
    icon: FaPaintBrush,
    to: '/colors',
  },
  {
    title: 'Images',
    icon: FaImages,
    to: '/images',
  },
  {
    title: 'Backgrounds',
    icon: FaImage,
    to: '/backgrounds',
  },
  {
    title: 'CSS',
    icon: FaCss3Alt,
    to: '/css',
  },
  {
    title: 'HTML',
    icon: FaHtml5,
    to: '/html',
  },
  {
    title: 'Inspiration',
    icon: FaLightbulb,
    to: '/inspiration',
  },
  {
    title: 'Javascript',
    icon: FaJsSquare,
    to: '/javascript',
  },
  {
    title: 'Articles',
    icon: FaBook,
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
