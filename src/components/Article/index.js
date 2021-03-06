import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Article.module.scss';

export default function Article({ title, children }) {
  return (
    <article>
      {title && (
        <>
          <h3
            className="block is-size-4 has-text-centered"
            data-testid="article-title"
          >
            {title}
          </h3>
          <hr />
        </>
      )}
      <div className={classnames('container', styles.mainContentList)}>
        <ul className="columns is-vcentered" data-testid="article-ul">
          {children}
        </ul>
      </div>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
