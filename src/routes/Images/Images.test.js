import { render } from '@testing-library/react';
import React from 'react';

import Images from '.';

describe('<Images />', () => {
  it('should render without crashing', () => {
    render(<Images />);
  });
});
