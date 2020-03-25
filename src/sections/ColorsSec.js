import React from 'react';

import ColorsRes from './resources/ColorsRes';
import './sections.css';

const ColorsList = ColorsRes.map(item => {
  return (
    <li className="box">
      <a
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
        className="has-text-left"
      >
        <img src={item.img} alt={item.alt} />
        <h2 className="is-size-4">{item.name}</h2>
        <p className="is-size-6">{item.desc}</p>
      </a>
    </li>
  );
});

function ColorsSec() {
  return (
    <div>
      <h1 className="is-size-2 has-text-centered">Colors</h1>
      <h3 className="block is-size-4 has-text-centered">
        Mainly color palettes
      </h3>
      <hr />
      <div className="container MainContentList">
        <ul className="columns is-vcentered">{ColorsList}</ul>
      </div>
    </div>
  );
}

export default ColorsSec;
