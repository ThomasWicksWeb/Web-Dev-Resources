import { render } from '@testing-library/react';
import React from 'react';

import ExternalLink from '.';

const defaultProps = { href: '//webdevresources.info' };

describe('<ExternalLink />', () => {
  it('should render without crasihng', () => {
    render(<ExternalLink {...defaultProps} />);
  });

  it('should have target="_blank" as default', () => {
    const { queryByText } = render(
      <ExternalLink {...defaultProps}>test</ExternalLink>
    );

    const link = queryByText(/test/);

    expect(link.getAttribute('target')).toBe('_blank');
  });

  it('should allow overriding target default', () => {
    const { queryByText } = render(
      <ExternalLink {...defaultProps} target={undefined}>
        test
      </ExternalLink>
    );

    const link = queryByText(/test/);

    expect(link.getAttribute('target')).toBe(null);
  });

  it('should have rel="noreferrer noopener" as default', () => {
    const { queryByText } = render(
      <ExternalLink {...defaultProps}>test</ExternalLink>
    );

    const link = queryByText(/test/);

    expect(link.getAttribute('rel')).toBe('noreferrer noopener');
  });

  it('should allow overriding rel defaults', () => {
    const { queryByText } = render(
      <ExternalLink {...defaultProps} rel={undefined}>
        test
      </ExternalLink>
    );

    const link = queryByText(/test/);

    expect(link.getAttribute('rel')).toBe(null);
  });
});
