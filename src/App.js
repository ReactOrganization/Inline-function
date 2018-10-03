import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
  super(props);
  	this.state = {
    	counter: 9
    }
  }

  handleClick = () => {
  	this.setState((prevState) => ({
     counter: prevState.counter + 1
    }));
  };

	render () {
  	return <button onClick={this.handleClick}>{this.state.counter}</button>
  }
}

export default App;
