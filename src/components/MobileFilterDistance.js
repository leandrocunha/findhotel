import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class MobileFilterDistance extends Component {
  constructor(props) {
    super(props);
    this.sortDistance = this.sortDistance.bind(this);
  }

  sortDistance(value) {
    const { dispatch } = this.props;
    dispatch(actions.sortDistance(value));

    const wrapper = document.getElementsByClassName('MobileFilter--distance');
    const buttons = wrapper[0].getElementsByClassName('Button--mobilefilter');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('Button--mobilefilter--orange--active');
      Number(buttons[i].dataset.value) === value
        && buttons[i].classList.add('Button--mobilefilter--orange--active');
    }

    dispatch(actions.toggleFilter());
  }

  render() {
    return (
      <div className="MobileFilter MobileFilter--distance">
        <button
          className="Button Button--mobilefilter Button--mobilefilter--orange Button--mobilefilter--orange--active"
          data-value={1001}
          onClick={() => this.sortDistance(1001)}
          type="button"
        >
          Any
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--orange Button--lowercase"
          data-value={100}
          onClick={() => this.sortDistance(100)}
          type="button"
        >
          100m
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--orange Button--lowercase"
          data-value={200}
          onClick={() => this.sortDistance(200)}
          type="button"
        >
          200m
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--orange Button--lowercase"
          data-value={300}
          onClick={() => this.sortDistance(300)}
          type="button"
        >
          300m
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--orange Button--lowercase"
          data-value={400}
          onClick={() => this.sortDistance(400)}
          type="button"
        >
          400m
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--orange Button--lowercase"
          data-value={1000}
          onClick={() => this.sortDistance(1000)}
          type="button"
        >
          +500m
        </button>
      </div>
    );
  }
}

export default connect()(MobileFilterDistance);
