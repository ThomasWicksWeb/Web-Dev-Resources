import React from 'react';

import { ResourceItem, Section, Article, Helmet } from '../../components';
import data from './data/data.json';

export default function Colors() {
  return (
    <>
      <Helmet>
        <title>Colors</title>
      </Helmet>
      <Section title="Colors">
        <Article>
          {data.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>
      </Section>
    </>
  );
}
