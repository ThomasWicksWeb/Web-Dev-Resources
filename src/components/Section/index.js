import PropTypes from 'prop-types';
import React from 'react';

export default function Section({ title, children }) {
  return (
    <section>
      <h1 className="is-size-2 has-text-centered has-text-weight-bold">
        {title}
      </h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
