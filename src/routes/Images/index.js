import React from 'react';

import { ResourceItem, Section, Article, Helmet } from '../../components';
import data from './data/data.json';

export default function Images() {
  return (
    <>
      <Helmet>
        <title>Images</title>
      </Helmet>
      <Section title="Images">
        <Article>
          {data.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>
      </Section>
    </>
  );
}
