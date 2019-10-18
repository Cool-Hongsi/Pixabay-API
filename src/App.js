import React, { Component } from 'react';
import PixabayContainer from './container/PixabayContainer';
import './App.scss';

export default class App extends Component{
  render(){
    return(
      <div className="app">
        <PixabayContainer />
      </div>
    )
  }
}