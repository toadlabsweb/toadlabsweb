import React, { Component } from 'react'
import { MapContainer, Marker, Popup, TileLayer  } from 'react-leaflet'

export default class MyMap extends Component {
  render() {
    
    if (typeof window !== 'undefined') {
      return (
        
        <MapContainer id="mapid" center={[13.1216138, 77.6183713]} zoom={15} scrollWheelZoom={false}>          
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.1216138, 77.6183713]}>
            <Popup>Toadlabs</Popup>
            </Marker>
        </MapContainer>
      )
    }
    return null
  }
}