import React from 'react';
import CssRes from './resources/CssRes';
import './sections.css';

const CssList = CssRes.map(item => {
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

function CSS(){
    return(
        <div>
            <h1 class="is-size-2 has-text-centered">CSS</h1>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { CssList }
                </ul>
            </div>
        </div>
    )
}

export default CSS;