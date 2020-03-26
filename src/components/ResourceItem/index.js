import PropTypes from 'prop-types';
import React from 'react';

import ExternalLink from '../ExternalLink';

export default function ResourceItem({ href, img, alt, name, desc }) {
  return (
    <li className="box">
      <ExternalLink className="has-text-left" href={href}>
        <figure>
          <img src={img} alt={alt} loading="lazy" />
          <figcaption>
            <h2 className="is-size-4">{name}</h2>
            <p className="is-size-6">{desc}</p>
          </figcaption>
        </figure>
      </ExternalLink>
    </li>
  );
}

ResourceItem.propTypes = {
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
