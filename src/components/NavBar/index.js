import React from 'react';

import * as ROUTES from '../../routes';
import NavbarItem from './NavbarItem';

export default function NavBar() {
  function preloadOnHover(component) {
    return function () {
      component.preload();
    };
  }

  return (
    <div className="tabs is-centered">
      <ul>
        {Object.values(ROUTES).map(({ path: to, icon, title, component }) => (
          <NavbarItem
            to={to}
            icon={icon}
            title={title}
            onMouseOver={preloadOnHover(component)}
            key={to}
          />
        ))}
      </ul>
    </div>
  );
}
