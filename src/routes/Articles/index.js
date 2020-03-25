import React from 'react';

import { ResourceItem } from '../../components';

const design = require('./design.json');
const general = require('./general.json');
const html = require('./html.json');
const jobs = require('./jobs.json');
const js = require('./js.json');

export default function Articles() {
  const ArticleListJS = js.map(item => {
    return <ResourceItem {...item} key={item.href} />;
  });

  const ArticleListHTMLCSS = html.map(item => {
    return <ResourceItem {...item} key={item.href} />;
  });

  const ArticleListDesign = design.map(item => {
    return <ResourceItem {...item} key={item.href} />;
  });

  const ArticleListJobs = jobs.map(item => {
    return <ResourceItem {...item} key={item.href} />;
  });

  const ArticleListGeneral = general.map(item => {
    return <ResourceItem {...item} key={item.href} />;
  });

  return (
    <div>
      <h1 className="is-size-2 has-text-centered">Articles</h1>
      <h3 className="block is-size-4 has-text-centered">Javascript</h3>
      <hr />
      <div className="container MainContentList">
        <ul className="columns is-vcentered">{ArticleListJS}</ul>
      </div>

      <h3 className="block is-size-4 has-text-centered">HTML &amp; CSS</h3>
      <hr />
      <div className="container MainContentList">
        <ul className="columns is-vcentered">{ArticleListHTMLCSS}</ul>
      </div>

      <h3 className="block is-size-4 has-text-centered">Design</h3>
      <hr />
      <div className="container MainContentList">
        <ul className="columns is-vcentered">{ArticleListDesign}</ul>
      </div>

      <h3 className="block is-size-4 has-text-centered">Jobs/Employment</h3>
      <hr />
      <div className="container MainContentList">
        <ul className="columns is-vcentered">{ArticleListJobs}</ul>
      </div>

      <h3 className="block is-size-4 has-text-centered">
        General Web Development
      </h3>
      <hr />
      <div className="container MainContentList">
        <ul className="columns is-vcentered">{ArticleListGeneral}</ul>
      </div>
    </div>
  );
}
