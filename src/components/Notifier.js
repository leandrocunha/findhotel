import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class Notifier extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.show();
  }

  close() {
    const { dispatch } = this.props;
    this.setState({ isOpen: false });
    setTimeout(() => dispatch(actions.notifier('close')), 1000);
  }

  show() {
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 300);
  }

  render() {
    const { message, title } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classnames('Notifier', isOpen && 'Notifier--show')}>
        <button className="Notifier__Close" onClick={this.close} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="transparent" d="M0 0h24v24H0z" />
            <path
              fill="#ccc"
              d="M20.707 4.707l-1.414-1.414L12 10.586 4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12z"
            />
          </svg>
        </button>
        <p className="Notifier__Title">{title}</p>
        <p className="Notifier__Message">{message}</p>
      </div>
    );
  }
}

Notifier.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect()(Notifier);
