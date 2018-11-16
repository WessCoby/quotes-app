import React, { Component } from 'react';
import Profile from './Profile';
import Quotes from './Quotes';
import Footer from './Footer';


class Main extends Component {
    render() {
        return (
            <div>
                <Profile />
                <Quotes />
                <Footer />
            </div>
        );
    }
}
export default Main;