import React, { Component } from 'react';
import RatingsButton from './RatingsButtons.js';
import axios from 'axios';


class Wrapper extends Component {
  constructor(props) {
  super(props);
  this.buttonClick = this.buttonClick.bind(this);
};


componentWillMount(){
  this.initialStateCall();
}

buttonClick(url) {
  axios
    .get('/excellent' + url)
    .then(response => {
      console.log(response);
      this.chooseStateSet(url, response);
    })
    .catch(error => {
      console.log(error);
    });
}

// chooseStateSet(url, response) {
//   const votes = [
//     {
//       key: 'excellent',
//       state: { excellentrating: response.data.excellentrating }
//     },
//   ];
//
// //   var stateUpdate = votes.find(vote => vote.key === url).state;
// //   this.setState(stateUpdate);
// // }
// 
// initialStateCall() {
//   axios
//     .get('/excellent')
//     .then(response => {
//       this.setState({
//         excellent: response.data.excellentrating,
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }



render() {
  return (
    <div>
      <VoteButton
        onclick={() => this.buttonClick('Excellent')}
        buttonID={'Excellent'}
        className={'Excellent'}
        buttonText={'Excellent'}
      />
    </div>
    );
  }

};


export default Wrapper;
