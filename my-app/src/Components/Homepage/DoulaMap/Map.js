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

  const clinicMarkers = [{ 
    id: 1,
    name: "Chicago, Illinois",
    address: "123 conch st, 11204",
    position: { lat: 41.881832, lng: -87.623177}}]

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
      <MarkerF position={{
        lat: 40.668470,
        lng: -73.982530
      }}
      />
      <MarkerF position={{
      lat: 40.683970,
    lng: -73.931860
      }}
      />
    </GoogleMap>
  ): <Spinner />
}

export default App;