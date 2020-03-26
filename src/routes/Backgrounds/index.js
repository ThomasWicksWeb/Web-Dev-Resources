import React from 'react';

import { ResourceItem, Section, Article, Helmet } from '../../components';
import data from './data/data.json';

export default function Backgrounds() {
  return (
    <>
      <Helmet>
        <title>Backgrounds</title>
      </Helmet>
      <Section title="Backgrounds">
        <Article>
          {data.map(item => (
            <ResourceItem {...item} key={item.href} />
          ))}
        </Article>
      </Section>
    </>
  );
}
