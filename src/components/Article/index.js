import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Article.module.scss';

export default function Article({ title, children }) {
  return (
    <article>
      <h3 className="block is-size-4 has-text-centered">{title}</h3>
      <hr />
      <div className={classnames('container', styles.mainContentList)}>
        <ul className="columns is-vcentered">{children}</ul>
      </div>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
