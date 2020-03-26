import React from 'react';

import { ResourceItem, Section, Article, Helmet } from '../../components';
import design from './data/design.json';
import general from './data/general.json';
import html from './data/html.json';
import jobs from './data/jobs.json';
import js from './data/js.json';

export default function Articles() {
  return (
    <>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Section title="Articles">
        <Article title="Javascript">
          {js.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>

        <Article title="HTML & CSS">
          {html.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>

        <Article title="Design">
          {design.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>

        <Article title="Jobs/Employment">
          {jobs.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>

        <Article title="General Web Development">
          {general.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>
      </Section>
    </>
  );
}
