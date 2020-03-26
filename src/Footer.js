import React from 'react';

import { ExternalLink } from './components';

function AppFooter() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="is-size-6">
          <strong>Web Dev Resources</strong> by{' '}
          <ExternalLink
            href="https://thomaswicks.com/"
            className="text-highlight hvr-sweep-to-right"
          >
            Thomas Wicks,
          </ExternalLink>{' '}
          created to organize the resources I've accumulated over the last 1-2
          years or so.
        </p>
        <p className="is-size-6">
          If you notice any mistakes, please contact me on my main page{' '}
          <ExternalLink
            href="https://thomaswicks.com/#contactMe"
            className="is-size-6 hvr-sweep-to-right text-highlight"
          >
            here
          </ExternalLink>
        </p>
        <p className="is-size-6">
          If you would like to support this website, you can{' '}
          <ExternalLink
            href="https://www.buymeacoffee.com/thomaswicks"
            className="is-size-6 hvr-sweep-to-right text-highlight"
          >
            buy me a coffee
          </ExternalLink>{' '}
          ☕ if you'd like.{' '}
        </p>
        <p className="is-size-6">
          Site last updated on <strong>March 23rd, 2020</strong>
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
