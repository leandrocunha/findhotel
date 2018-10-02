import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class Favorite extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {bool} favorite
     * @example
     * { loading: false }
     */
    this.state = { favorite: false };

    /** Bind toggle function to check/uncheck result as favorite. */
    this.toggle = this.toggle.bind(this);
  }

  /**
   * @function toggle Check/Uncheck result as favorite saving in local state
   * and dispatch the action to fire Notifier component.
   */
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
