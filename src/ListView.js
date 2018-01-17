import React, { Component } from 'react';

export default class ListView extends Component {
  render(){
    return(
      <li key={this.props.brandName}>
        <div>{this.props.brandName}</div>
        <div>
          <img src={this.props.productImage} width="100px" />
        </div>
        <div>{this.props.productDescription}</div>
      </li>
    );
  }
}
