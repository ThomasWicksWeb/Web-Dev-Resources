import React from 'react';

import { ResourceItem, Section, Article } from '../../components';
import data from './data/data.json';

export default function Javascript() {
  return (
    <Section title="Javascript">
      <Article>
        {data.map(item => (
          <ResourceItem {...item} key={item.href} />
        ))}
      </Article>
    </Section>
  );
}
