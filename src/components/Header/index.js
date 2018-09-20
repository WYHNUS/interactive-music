import React from 'react';
import NavigationButton from 'components/NavigationButton';

import logo from 'assets/logo.svg';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{margin: "10px", display: "inline"}}>
          Welcome to Interactive Music
        </h1>

        <div>
          <NavigationButton url="/notes" name="notes" />
          <NavigationButton url="/chords" name="chords" />
        </div>
      </header>
    );
  }
}

