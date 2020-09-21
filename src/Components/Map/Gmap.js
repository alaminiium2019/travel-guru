import React, {Component} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from '../../Images/map-image/green-marker.png';
import leafRed from '../../Images/map-image/red-marker.png';
import leafOrange from '../../Images/map-image/yellow-marker.png';
import leafShadow from '../../Images/map-image/shadow.png';
import './Gmap.css';



class Gmap extends Component {
  
  state = {
    greenIcon: {
      lat: 23.382,
      lng: 92.2938,
    },
    redIcon: {
      lat: 24.3065,
      lng: 91.7296,
    },
    orangeIcon: {
      lat: 21.9497,
      lng: 89.1833,
    },
    zoom: 11
  }


  grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [40, 40], // size of the shadow
    iconAnchor:   [22, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 30],  // the same for the shadow
    
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
   
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    
  });

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    return (
      <div className="map">
      <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon}>
          <Popup>
          
          </Popup>
        </Marker>
        <Marker position={positionRedIcon} icon={this.redIcon}>
          <Popup>
          
          </Popup>
        </Marker>
        <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
          <Popup>
          
          </Popup>
        </Marker>
      </Map>
      </div>
    );
  }
}

export default Gmap;