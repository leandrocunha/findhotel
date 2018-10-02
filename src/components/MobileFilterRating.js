import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class MobileFilterRating extends Component {
  constructor(props) {
    super(props);
    this.sortRate = this.sortRate.bind(this);
  }

  sortRate(value) {
    const { dispatch } = this.props;
    dispatch(actions.sortRate(value));

    const wrapper = document.getElementsByClassName('MobileFilter--rating');
    const buttons = wrapper[0].getElementsByClassName('Button--mobilefilter');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('Button--mobilefilter--yellow--active');
      Number(buttons[i].dataset.value) === value
        && buttons[i].classList.add('Button--mobilefilter--yellow--active');
    }

    dispatch(actions.toggleFilter());
  }

  render() {
    return (
      <div className="MobileFilter MobileFilter--rating">
        <button
          className="Button Button--mobilefilter Button--mobilefilter--yellow Button--mobilefilter--yellow--active"
          data-value={6}
          onClick={() => this.sortRate(6)}
          type="button"
        >
          Any
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--yellow"
          data-value={1}
          onClick={() => this.sortRate(1)}
          type="button"
        >
          1
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--yellow"
          data-value={2}
          onClick={() => this.sortRate(2)}
          type="button"
        >
          2
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--yellow"
          data-value={3}
          onClick={() => this.sortRate(3)}
          type="button"
        >
          3
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--yellow"
          data-value={4}
          onClick={() => this.sortRate(4)}
          type="button"
        >
          4
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--yellow"
          data-value={5}
          onClick={() => this.sortRate(5)}
          type="button"
        >
          5
        </button>
      </div>
    );
  }
}

export default connect()(MobileFilterRating);
