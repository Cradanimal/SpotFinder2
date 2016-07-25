import React from 'react';
import GoogleMap from 'google-map-react';
import SkateSpot from './skateSpot.jsx';
import UserSpot from './userSpot.jsx';


export default class OurMap extends React.Component {
  constructor(props) {
    super(props);
  }

  spotOnBlur() {
    this.props.clickNav(0);
  }

  createMapOptions(maps){
      return {
      styles: [{"featureType":"landscape.natural","stylers":[{"color":"#bcddff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#5fb3ff"}]},{"featureType":"road.arterial","stylers":[{"color":"#ebf4ff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ebf4ff"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#93c8ff"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#c7e2ff"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"saturation":100},{"gamma":0.82},{"hue":"#0088ff"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#1673cb"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"saturation":58},{"hue":"#006eff"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#4797e0"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#209ee1"},{"lightness":49}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#83befc"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#3ea3ff"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"saturation":86},{"hue":"#0077ff"},{"weight":0.8}]},{"elementType":"labels.icon","stylers":[{"hue":"#0066ff"},{"weight":1.9}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"hue":"#0077ff"},{"saturation":-7},{"lightness":24}]}]
    };
  }

  render() {
    //google map component from google-map-react
    return (
      <GoogleMap bootstrapURLKeys={{key: 'AIzaSyDZjkD659gGlpyUKXU14_Tomji58BSfI0A',language: 'en'}} options={this.createMapOptions} center={this.props.center} zoom={this.props.zoom} onClick={ () => { this.spotOnBlur() } }>
        <UserSpot user={this.props.user} lat={this.props.userLocation.lat} lng={this.props.userLocation.lng} />
        {this.props.skateSpotsData.map( (skateSpotData, index) => {
          return ( <SkateSpot key={skateSpotData._id || index} lat={skateSpotData.lat} lng={skateSpotData.lng} 
                   skateSpotData={skateSpotData} clickNav={this.props.clickNav} /> );
        })}
      </GoogleMap>
    );
  }
};
