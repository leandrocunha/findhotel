import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { dispatch } = this.props;
    const { favorite } = this.state;

    this.setState({ favorite: !favorite });
    !favorite && dispatch(actions.notifier('open'));
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
      </div>
    );
  }
}

export default connect()(Favorite);
