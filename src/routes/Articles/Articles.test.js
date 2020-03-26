import { render } from '@testing-library/react';
import React from 'react';

import Articles from '.';

describe('<Articles />', () => {
  it('should render without crashing', () => {
    render(<Articles />);
  });
});
