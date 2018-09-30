import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div>
    <img src="images/pin.svg" />
  </div>
);

class GMaps extends Component {
  render() {
    const { lat, lng } = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAuAYdtDWwrfUVtYBIRkeBylF23qebA6rQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={{ lat, lng }}
        >
          <AnyReactComponent lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

GMaps.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 15,
};

export default GMaps;
