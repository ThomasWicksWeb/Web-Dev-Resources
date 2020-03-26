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
export default function Icon({ icon: Icon, size, className, ...rest }) {
  return (
    <span
      className={classnames('icon', className, size && `size-${size}`)}
      {...rest}
    >
      <Icon />
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
