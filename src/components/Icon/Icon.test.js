import { render } from '@testing-library/react';
import React from 'react';
import { Fa500Px } from 'react-icons/fa';

import Icon from '.';

const defaultProps = {
  icon: Fa500Px,
};

describe('<Icon />', () => {
  it('should render without crahsing given default props', () => {
    render(<Icon {...defaultProps} />);
  });

  // test whether its wrapped within an element with className includes icon
  // test whether it can be of size small/large/medium
});
