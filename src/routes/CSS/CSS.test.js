import { render } from '@testing-library/react';
import React from 'react';

import CSS from '.';

describe('<CSS />', () => {
  it('should render without crashing', () => {
    render(<CSS />);
  });
});
