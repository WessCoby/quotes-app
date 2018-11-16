import React, { Component } from 'react';

class Quotes extends Component {
    render() {
        return (
                <main role="main" className="Quotes">
                    <blockquote className="blockquote text-center">
                        <p className="mb-0 text-fira-sans quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.</p>
                        <footer className="blockquote-footer text-fira-sans">Someone famous in <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>
                </main>
        );
    }
}
export default Quotes;