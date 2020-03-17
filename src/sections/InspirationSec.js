import React from 'react';
import InspirationRes from './resources/InspirationRes';
import './sections.css';

const InspirationList = InspirationRes.map(item => {
    return(
        <li className="box">
            <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                <img src={ item.img } alt={ item.alt } />
                <h2 className="is-size-4">{ item.name }</h2>
                <p className="is-size-6">{ item.desc }</p>
            </a>
        </li>
    )
})

function InspirationSec(){
    return(
        <div>
            <h1 class="is-size-2 has-text-centered">Inspiration</h1>
            <h3 class="block is-size-4 has-text-centered">Design &amp; content inspiration</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { InspirationList }
                </ul>
            </div>
        </div>
    )
}

export default InspirationSec;