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
            className="text-highlight hvr-sweep-to-right has-text-weight-bold"
          >
            Thomas Wicks,
          </ExternalLink>{' '}
          created to organize the resources I've accumulated over the last 3
          years or so.
        </p>
        <p className="is-size-6">
          If you notice any mistakes, please report a bug on my main page{' '}
          <ExternalLink
            href="https://thomaswicks.com/report"
            className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold"
          >
            here
          </ExternalLink>
        </p>
        <p className="is-size-6">
          If you would like to support this website, you can{' '}
          <ExternalLink
            href="https://www.buymeacoffee.com/thomaswicks"
            className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold"
          >
            buy me a coffee
          </ExternalLink>{' '}
          ☕ if you'd like.{' '}
        </p>
        <p className="is-size-6">
          Want to contribute to Web Dev Resources? Check out the{' '}
          <ExternalLink
            href="https://github.com/ThomasWicksWeb/Web-Dev-Resources-React"
            className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold"
          >
            GitHub repository.
          </ExternalLink>{' '}
        </p>
        <p className="is-size-6">
          Site last updated on{' '}
          <strong>
            July<sup>3rd</sup>, 2020
          </strong>
        </p>
      </div>
    </footer>
  );
}
//
export default AppFooter;
