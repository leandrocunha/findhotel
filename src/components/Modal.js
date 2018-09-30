import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapClose } from '../actions/search';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    const { dispatch } = this.props;
    dispatch(mapClose());
  }

  render() {
    return (
      <div className="Modal" onClick={this.close}>
        <div className="Modal__Body" onClick={e => e.stopPropagation()}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect()(Modal);
