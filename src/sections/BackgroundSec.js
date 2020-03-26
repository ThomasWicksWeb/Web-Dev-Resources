import React from 'react';
import BackgroundsRes from './resources/BackgroundsRes';
import './sections.css';

const BackgroundsList = BackgroundsRes.map(item => {
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

function BackgroundsSec(){
    return(
        <div>
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">Backgrounds</h1>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { BackgroundsList }
                </ul>
            </div>
        </div>
    )
}

export default BackgroundsSec;