import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    return(
        <div className="tabs is-centered">
            <ul>
                <li className="tab-links">
                    <NavLink to="./Colors"><span className="icon is-small"><i className="fas fa-paint-brush" aria-hidden="true"></i></span><span>Colors</span></NavLink>
                </li>

                <li className="tab-links">
                    <NavLink to="./Images"><span className="icon is-small"><i className="fas fa-images" aria-hidden="true"></i></span><span>Images</span></NavLink>
                </li>

                <li className="tab-links">
                    <NavLink to="./Backgrounds"><span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span><span>Backgrounds</span></NavLink>
                </li>

                <li className="tab-links">
                    <NavLink to="./Css"><span className="icon is-small"><i className="fab fa-css3-alt" aria-hidden="true"></i></span><span>CSS</span></NavLink>
                </li>

                <li className="tab-links">
                    <NavLink to="./HTML"><span className="icon is-small"><i className="fab fa-html5" aria-hidden="true"></i></span><span>HTML</span></NavLink>
                </li>

                <li className="tab-links">
                    <NavLink to="./Inspiration"><span className="icon is-small"><i className="far fa-lightbulb" aria-hidden="true"></i></span><span>Inspiration</span></NavLink>
                </li>

                <li className="tab-links">
                    <NavLink to="./Javascript"><span className="icon is-small"><i className="fab fa-js-square" aria-hidden="true"></i></span><span>Javascript</span></NavLink>
                </li>
                
                <li className="tab-links">
                    <NavLink to="./Articles"><span className="icon is-small"><i className="fas fa-book" aria-hidden="true"></i></span><span>Articles</span></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;