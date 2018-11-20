import React, { Component } from 'react';
import Header from './header';
import './main-page.css';

class App extends Component {

  render() {
    let dynamic = 'Providing houses world wide';
    return (
        <div className="container">
            <Header subtitle={dynamic}/>
        </div>
    );
  }
}

export default App;
