import React, { Component, Fragment } from 'react';
import Notifier from './Notifier';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { favorite } = this.state;
    this.setState({ favorite: !favorite });
  }

  render() {
    const { favorite } = this.state;

    return (
      <div className="Favorite">
        <button className="Favorite__Button" onClick={this.toggle} type="button">
          {favorite ? (
            <img
              alt="This is my Favorite"
              className="Favorite__Button__Icon"
              src="images/favorite-fill.svg"
            />
          ) : (
            <img
              alt="Make a favorite"
              className="Favorite__Button__Icon"
              src="images/favorite.svg"
            />
          )}
        </button>
        {favorite && (
          <Notifier title="Congratulations!" message="Now this hotel is in your favorite list." />
        )}
      </div>
    );
  }
}

export default Favorite;
