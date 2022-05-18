import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, useLoadScript } from '@react-google-maps/api'

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
    address: "521 Halsey Street, Brooklyn, New York 11233 ",
    position: { lat: 40.683970, lng: -73.931860}
  },
    {
    id: 2,
    clinicname: "Caribbean Womens Health Association",
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
      {clinicMarkers.map(({id, clinicname, address, position }) => 
        <MarkerF
          key= {id}
          position= {position}
        ></MarkerF>
      )}
    </GoogleMap>
  ): <Spinner />
}

export default App;