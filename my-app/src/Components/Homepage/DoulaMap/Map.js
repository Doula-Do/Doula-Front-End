import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, useLoadScript, InfoWindow, Marker } from '@react-google-maps/api'

function Spinner() {
  return 'Loading...'
}

const API_KEY = "AIzaSyCzaZkyjl3bdTuYl9pHS1lsVvE5oLFGZKE"

function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY
  })

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  const clinicMarkers = [
    { 
    id: 1,
    clinicname: "Ancient Song Doula Services",
    phoneNumber: "347-778-3490",
    address: "521 Halsey Street, Brooklyn, New York 11233 ",
    position: { lat: 40.683970, lng: -73.931860}
  },
    {
    id: 2,
    clinicname: "Caribbean Womens Health Association",
    phoneNumber: "718-826-2942",
    address: "3512 Church Ave Brooklyn, NY 11203",
    position: { lat: 40.650860, lng: -73.944310}}
  ];

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
         width: '700px',
        height: '700px'
      }}
      zoom={10}
      center={{
        lat: 	40.730610,
        lng: -73.935242
      }}
    >
      {clinicMarkers.map(({id, clinicname, phoneNumber, address, position }) => 
        <MarkerF
          key= {id}
          position= {position}
          > 
          <InfoWindow position={position}>
            <div>
              <div>{clinicname}</div>
              <div>{phoneNumber}</div>
              <div>{address}</div>
            </div>
            
          </InfoWindow>
        </MarkerF>
        
      )}
    </GoogleMap>
  ): <Spinner />
}

export default App;