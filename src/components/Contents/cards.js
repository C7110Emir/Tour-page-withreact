  
import React, { Component } from 'react';
import Contentcards from "./Contentcards";
import data from '../data';
import cardStyle from './card.css';

export default class Cards extends Component {
  render() {
    console.log(data);
    const arr = data.map((item) => (
      <Contentcards id={item.id} title={item.title} desc={item.desc} img={item.image} />
    ));
    return (
      <div className="cards">
        <div className="card-box">{arr}</div>
      </div>
    );
  }
}