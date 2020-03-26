import { render } from '@testing-library/react';
import React from 'react';

import Article from '.';

const defaultProps = {
  title: 'some title',
  children: <li data-testid="li">1</li>,
};

describe('<Article />', () => {
  it('should render without crashing given default props', () => {
    render(<Article {...defaultProps} />);
  });

  it('should be an HTMLArticleElement', () => {
    const { container } = render(<Article {...defaultProps} />);

    expect(container.firstChild.tagName).toBe('ARTICLE');
  });

  it('should render children within an <ul />', () => {
    const { getByTestId } = render(<Article {...defaultProps} />);

    const ul = getByTestId('article-ul');
    const li = getByTestId('li');

    expect(li).toBeInTheDocument();
    expect(ul.firstChild).toBe(li);
  });

  it('should optionally render a title', () => {
    const { queryByText } = render(
      <Article {...defaultProps} title={undefined} />
    );

    expect(queryByText(defaultProps.title)).toBe(null);
  });
});
