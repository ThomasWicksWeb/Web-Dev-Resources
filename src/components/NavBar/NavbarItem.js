import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon';
import styles from './NavbarItem.module.scss';

export default function NavbarItem({ title, icon, to, onMouseOver }) {
  return (
    <li className="tab-links">
      <NavLink to={to} onMouseOver={onMouseOver}>
        <Icon size="small" icon={icon} className={styles.icon} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};
