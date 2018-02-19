import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class One extends Component {
  render() {
    return (
      <div className="One">
        <h1>This is Page {this.props.example}</h1>
        <Link to='/two'><h3>Next</h3></Link>
      </div>
    );
  }
}

export default One;
