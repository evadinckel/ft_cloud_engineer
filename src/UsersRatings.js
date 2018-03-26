import React, { Component } from 'react';
import style from './style';

class UsersRatings {
  constructor() {
    this.excellentrating = 0;
    this.goodrating = 0;
    this.mediocrerating = 0;
    this.terriblerating = 0;
  }

  rateExcellent() {
    this.excellentrating++;
  }

  rateGood() {
    this.goodrating++;
  }

  rateMediocre() {
    this.mediocrerating++;
  }

  rateTerrible() {
    this.terriblerating++;
  }
}




export default UsersRatings;
