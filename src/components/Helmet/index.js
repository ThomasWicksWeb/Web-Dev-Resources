import PropTypes from 'prop-types';
import React from 'react';
import { Helmet as RealHelmet } from 'react-helmet';

/**
 *
 * @param {{
 * children: JSX.Element
 * }}
 */
export default function Helmet({ children }) {
  return (
    <RealHelmet titleTemplate={`%s | Web Dev Resources`}>{children}</RealHelmet>
  );
}

Helmet.propTypes = {
  children: PropTypes.node,
};
