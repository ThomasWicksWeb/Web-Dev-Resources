import { render } from '@testing-library/react';
import React from 'react';

import HTML from '.';

describe('<HTML />', () => {
  it('should render without crashing', () => {
    render(<HTML />);
  });
});
