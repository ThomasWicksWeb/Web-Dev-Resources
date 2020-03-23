import React from 'react';
import { articlesResJS, articlesResHTML, articlesResDesign, articlesResGeneral, articlesResJobs } from './resources/ArticlesRes';

const ArticleSec = () => {

    const ArticleListJS = articlesResJS.map(item => {
        return(
            <li className="box">
                <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                    <img src={ item.img } alt={ item.alt } />
                    <h2 className="is-size-4">{ item.name }</h2>
                    <p className="is-size-6">{ item.desc }</p>
                </a>
            </li>
        )
    });

    const ArticleListHTMLCSS = articlesResHTML.map(item => {
        return(
            <li className="box">
                <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                    <img src={ item.img } alt={ item.alt } />
                    <h2 className="is-size-4">{ item.name }</h2>
                    <p className="is-size-6">{ item.desc }</p>
                </a>
            </li>
        )
    });

    const ArticleListDesign = articlesResDesign.map(item => {
        return(
            <li className="box">
                <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                    <img src={ item.img } alt={ item.alt } />
                    <h2 className="is-size-4">{ item.name }</h2>
                    <p className="is-size-6">{ item.desc }</p>
                </a>
            </li>
        )
    });

    const ArticleListJobs = articlesResJobs.map(item => {
        return(
            <li className="box">
                <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                    <img src={ item.img } alt={ item.alt } />
                    <h2 className="is-size-4">{ item.name }</h2>
                    <p className="is-size-6">{ item.desc }</p>
                </a>
            </li>
        )
    });

    const ArticleListGeneral = articlesResGeneral.map(item => {
        return(
            <li className="box">
                <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                    <img src={ item.img } alt={ item.alt } />
                    <h2 className="is-size-4">{ item.name }</h2>
                    <p className="is-size-6">{ item.desc }</p>
                </a>
            </li>
        )
    });

    return(
        <div>
            <h1 className="is-size-2 has-text-centered">Articles</h1>
            <h3 className="block is-size-4 has-text-centered">Javascript</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { ArticleListJS }
                </ul>
            </div>

            <h3 className="block is-size-4 has-text-centered">HTML &amp; CSS</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { ArticleListHTMLCSS }
                </ul>
            </div>

            <h3 className="block is-size-4 has-text-centered">Design</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { ArticleListDesign }
                </ul>
            </div>

            <h3 className="block is-size-4 has-text-centered">Jobs/Employment</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { ArticleListJobs }
                </ul>
            </div>

            <h3 className="block is-size-4 has-text-centered">General Web Development</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { ArticleListGeneral }
                </ul>
            </div>


        </div>
    )
}

export default ArticleSec;