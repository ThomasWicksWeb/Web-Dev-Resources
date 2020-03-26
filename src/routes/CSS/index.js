import React from 'react';

import { ResourceItem, Section, Article, Helmet } from '../../components';
import data from './data/data.json';

export default function CSS() {
  return (
    <>
      <Helmet>
        <title>CSS</title>
      </Helmet>
      <Section title="CSS">
        <Article>
          {data.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>
      </Section>
    </>
  );
}
