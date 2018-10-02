import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';
import Numeral from './Numeral';

class MobileMaxPrice extends Component {
  constructor(props) {
    super(props);
    this.sortPrice = this.sortPrice.bind(this);
  }

  sortPrice(value) {
    const { dispatch } = this.props;
    dispatch(actions.sortPrice(value));

    const wrapper = document.getElementsByClassName('MobileFilter--price');
    const buttons = wrapper[0].getElementsByClassName('Button--mobilefilter');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('Button--mobilefilter--primary--active');
      Number(buttons[i].dataset.value) === value
        && buttons[i].classList.add('Button--mobilefilter--primary--active');
    }

    dispatch(actions.toggleFilter());
  }

  render() {
    return (
      <div className="MobileFilter MobileFilter--price">
        <button
          className="Button Button--mobilefilter Button--mobilefilter--primary Button--mobilefilter--primary--active"
          data-value={1001}
          onClick={() => this.sortPrice(1001)}
          type="button"
        >
          Any
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--primary"
          data-value={100}
          onClick={() => this.sortPrice(100)}
          type="button"
        >
          <Numeral value={100} />
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--primary"
          data-value={200}
          onClick={() => this.sortPrice(200)}
          type="button"
        >
          <Numeral value={200} />
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--primary"
          data-value={300}
          onClick={() => this.sortPrice(300)}
          type="button"
        >
          <Numeral value={300} />
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--primary"
          data-value={400}
          onClick={() => this.sortPrice(400)}
          type="button"
        >
          <Numeral value={400} />
        </button>
        <button
          className="Button Button--mobilefilter Button--mobilefilter--primary"
          data-value={1000}
          onClick={() => this.sortPrice(1000)}
          type="button"
        >
          <Numeral value={500} />
        </button>
      </div>
    );
  }
}

export default connect()(MobileMaxPrice);
