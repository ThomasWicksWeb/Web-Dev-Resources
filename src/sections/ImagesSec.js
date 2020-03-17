import React from 'react';
import ImagesList from './resources/ImagesRes';
import './sections.css';

const ImgList = ImagesList.map(item => {
    return(
        <li className="box">
            <a href={ item.href } rel="noopener" target="_blank" className="has-text-left">
                <img src={ item.img } alt={ item.alt } />
                <h2 className="is-size-4">{ item.name }</h2>
                <p className="is-size-6">{ item.desc }</p>
            </a>
        </li>
    )
})

function ImagesSec(){
    return(
        <div>
            <h1 class="is-size-2 has-text-centered">Images</h1>
            <h3 class="block is-size-4 has-text-centered">Free images, editors, compressors, icons, and illustrations</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { ImgList }
                </ul>
            </div>
        </div>
    )
}

export default ImagesSec;