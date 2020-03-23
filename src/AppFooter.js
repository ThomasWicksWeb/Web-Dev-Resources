import React from 'react'

function AppFooter(){
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="is-size-6">
                    <strong>Web Dev Resources</strong> by <a href="https://thomaswicks.com/" rel="noopener noreferrer" className="text-highlight hvr-sweep-to-right">Thomas Wicks,</a> created to organize the resources I've accumulated over the last 1-2 years or so.
                </p>
                <p className="is-size-6">If you notice any mistakes, please contact me on my main page <a href="https://thomaswicks.com/#contactMe" target="_blank" rel="noopener noreferrer" class="is-size-6 hvr-sweep-to-right text-highlight">here</a></p>
                <p className="is-size-6">If you would like to support this website, you can <a href="https://www.buymeacoffee.com/thomaswicks" target="_blank" rel="noopener noreferrer" class="is-size-6 hvr-sweep-to-right text-highlight">buy me a coffee</a> ☕ if you'd like. </p>
                <p className="is-size-6">Site last updated on <strong>Sep 23rd, 2019</strong></p>
            </div>
        </footer>
    )
}

export default AppFooter;