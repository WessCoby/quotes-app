import React, { Component } from 'react';
import { fetchQuote } from '../Functions';

class Quotes extends Component {

    state = {
        favoriteQuote: fetchQuote()
    };

    outputQuote = () => this.setState({favoriteQuote: fetchQuote()});

    componentDidMount = () => {
        this.QuoteInterval = setInterval(() => this.outputQuote(), 20000);
    };

    componentWillUnmount = () => clearInterval(this.QuoteInterval());

    render() {
        return (
                <main role="main" className="Quotes">
                    <blockquote className="blockquote text-center">
                        <p className="mb-0 text-fira-sans quote-text">
                            {this.state.favoriteQuote.output().fetchedQuote}
                        </p>
                        <footer className="blockquote-footer text-fira-sans quote-author">
                            {this.state.favoriteQuote.output().fetchedQuoteAuthor}
                        </footer>
                    </blockquote>
                </main>
        );
    }
}
export default Quotes;