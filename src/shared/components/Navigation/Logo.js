import React, { Component } from 'react';
import tweek from '../../../assets/image/tweek.svg';
import './Logo.css';
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logo-img" src={tweek} alt="logo" />
      </div>
    );
  }
}

export default Logo;
