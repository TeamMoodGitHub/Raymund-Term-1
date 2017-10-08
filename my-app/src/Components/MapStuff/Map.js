import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const defaultCenter={ lat: 40.7134, lng: -74.0055 }; /* NYC */

/* child component ? */
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDCXCgYKw10ci0cm1Oe7gCU8353rS6riDw&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `34.6em` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    center={props.markerPos}
  >
    {props.isMarkerShown && <Marker position={props.markerPos} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

/* parent component ? */
export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: 'New York City',
      isMarkerShown: true,
      lat: 40.7134,
      lng: -74.0055
    };
    this.changeCoords = this.changeCoords.bind(this);
  }

  /* randomCoordtakes the current position of the marker and
     changes its current position by +/- any real number from 0 to 0.0167.
     0.0167 is chosen as the maximum range so that the marker will travel
     no farther than about a mile at a time. */
  randomCoord(currentCoord) {
    var coord = currentCoord;
    const maxDegree = 0.0167;
    var isMinus = (Math.random() < 0.5) ? true : false;
    var coordChanger = Math.random() * maxDegree;
    if (isMinus) coord -= coordChanger;
    else coord += coordChanger;
    return coord;
  }

  determineLat(newCity) {
    if (newCity == 'Seattle, WA') return 47.6062;
    else if (newCity == 'Orlando, FL') return 28.5383;
    else return 40.7134;
  }

  determineLng(newCity) {
    if (newCity == 'Seattle, WA') return -122.3321;
    else if (newCity == 'Orlando, FL') return -81.3792;
    else return -74.0055;
  }

  changeCoords() {
    this.setState({
      lat: this.randomCoord(this.state.lat),
      lng: this.randomCoord(this.state.lng)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      city: nextProps.city,
      lat: this.determineLat(nextProps.city),
      lng: this.determineLng(nextProps.city)
    });
  }

  render() {
    var coordinates = {lat: this.state.lat, lng: this.state.lng}
    return (
      <div>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.changeCoords}
          markerPos={coordinates}
          />
      </div>
    )
  }
}
