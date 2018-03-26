import React from 'react';
import UsersRatings from './UsersRatings';


class RatingsButtons extends React.Component {
  render() {
    return (
      <div className={this.props.className}>

        <header className="Excellent" />
        <button id={this.props.buttonID} onClick={this.props.onclick}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}



export default VoteButton;
