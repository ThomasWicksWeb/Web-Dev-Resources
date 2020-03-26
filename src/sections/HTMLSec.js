import React from 'react';
import HTMLRes from './resources/HTMLRes';
import './sections.css';

const HTMLList = HTMLRes.map(item => {
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

function HTMLSec(){
    return(
        <div>
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">HTML</h1>
            <h3 class="block is-size-4 has-text-centered">(Stuff I wish I knew about sooner)</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { HTMLList }
                </ul>
            </div>
        </div>
    )
}

export default HTMLSec;