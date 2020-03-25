import React from 'react';

/**
 *
 * @param {{
 * children: JSX.Element
 * }} props
 */
export default function ExternalLink({ children, ...rest }) {
  return (
    <a rel="noreferrer noopener" target="_blank" {...rest}>
      {children}
    </a>
  );
}
