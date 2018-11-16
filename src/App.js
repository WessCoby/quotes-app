import React, { Component } from 'react';
import './css/App.css';
import Profile from "./components/Profile";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";


class App extends Component {

  render() {
    return (
              <div className="container h-100 mt-4 text-white" style={{minHeight: "95vh"}}>
                  <div className="row d-flex flex-column justify-content-between" style={{minHeight: "95vh"}}>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                          <Profile />
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                          <Quotes />
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                          <Footer />
                      </div>
                  </div>
              </div>
    );
  }
}
export default App;
