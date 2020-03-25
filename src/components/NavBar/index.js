import React from 'react';

import * as ROUTES from '../../routes';
import NavbarItem from './NavbarItem';

export default function NavBar() {
  return (
    <div className="tabs is-centered">
      <ul>
        {Object.values(ROUTES).map(({ path: to, icon, title }) => (
          <NavbarItem to={to} icon={icon} title={title} key={to} />
        ))}
      </ul>
    </div>
  );
}
