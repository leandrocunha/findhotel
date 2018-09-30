import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from './Marker';

const GMaps = ({
  center, lat, lng, zoom,
}) => (
  <div className="GMaps">
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAuAYdtDWwrfUVtYBIRkeBylF23qebA6rQ' }}
      defaultCenter={center}
      defaultZoom={zoom}
      center={{ lat, lng }}
    >
      <Marker lat={lat} lng={lng} />
    </GoogleMapReact>
  </div>
);

GMaps.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 15,
};

GMaps.propTypes = {
  center: PropTypes.instanceOf(Object),
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
};
export default GMaps;
