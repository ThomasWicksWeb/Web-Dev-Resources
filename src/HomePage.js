import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {


    return(
        // <section className="section">
        //     <div className="container HomePageGridParent has-text-centered is-size-1">
        //         {/* <Link to="colors" className="">
        //             <h2 className="has-text-white">Colors</h2>
        //         </Link>
        //         <Link to="images" className="">
        //             <h2 className="has-text-white">Images</h2>
        //         </Link>
        //         <Link to="backgrounds" className="">
        //             <h2 className="has-text-white">Backgrounds</h2>
        //         </Link>
        //         <Link to="css" className="">
        //             <h2 className="has-text-white">CSS</h2>
        //         </Link>
        //         <Link to="html" className="">
        //             <h2 className="has-text-white">html</h2>
        //         </Link>
        //         <Link to="inspiration" className="">
        //             <h2 className="has-text-white">Inspiration</h2>
        //         </Link>
        //         <Link to="javascript" className="">
        //             <h2 className="has-text-white">Javascript</h2>
        //         </Link>
        //         <Link to="articles" className="">
        //             <h2 className="has-text-white">Articles</h2>
        //         </Link> */}
        //         <Link to="colors" className="">
        //             <h2 className="has-text-white">Colors</h2>
        //         </Link>
        //     </div>
        // </section>
        <section class="hero is-info is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Large title</h1>
            <h2 class="subtitle">Large subtitle</h2>
            <Link to="colors" className="">
                <h2 className="">Colors</h2>
            </Link>
          </div>
        </div>
      </section>
    );
}

export default HomePage;