import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param {{
 * icon: import('react-icons').IconType;
 * size: 'small' | 'medium' | 'large';
 * }} props
 */
export default function Icon({ icon: Icon, size }) {
  return (
    <span className={classnames('icon', size && `size-${size}`)}>
      <Icon />
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
