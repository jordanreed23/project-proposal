import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Two extends Component {
  render() {
    return (
      <div className="Two">
        <h1>This is Page {this.props.example}</h1>
        <Link to='/'><h3>Previous</h3></Link>
      </div>
    );
  }
}

export default Two;
