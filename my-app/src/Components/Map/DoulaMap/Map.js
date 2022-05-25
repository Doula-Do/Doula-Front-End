import React, { useState, useEffect } from "react";
import {GoogleMap, useJsApiLoader,MarkerF, useLoadScript, InfoWindow, Marker,} from "@react-google-maps/api";

function Spinner() {
  return "Loading...";
}

const API_KEY = "AIzaSyCzaZkyjl3bdTuYl9pHS1lsVvE5oLFGZKE";

function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });
  const [clinics, setClinics] = useState(null);

  useEffect(() => {
    const fetchClinics = () => {
      fetch("http://localhost:8000/clinics")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setClinics(data);
        });
    };
    fetchClinics();
  }, []);
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded && clinics ? (
    <div className="googlemap">
    <GoogleMap
      
      mapContainerStyle={{
        width: "700px",
        height: "700px",
      }}
      zoom={10}
      center={{
        lat: 40.73061,
        lng: -73.935242,
      }}
    >
      {clinics.map(({ id, latitude, longitude, clinic_name, phone_number, address, zipcode }) => {
        return (
         <CustomMarker id = {id} latitude = {latitude} longitude = {longitude} clinic_name = {clinic_name} phone_number = {phone_number} address = {address} zipcode = {zipcode}/>
        );
      })}
    </GoogleMap>
    </div>
  ) : (
    <Spinner />
  );
}
function CustomMarker({ id, latitude, longitude, clinic_name, phone_number, address, zipcode }){
  const [show, setShow] = useState(false)
  return (
    <MarkerF key={id} position={{
      lat: latitude,
    lng: longitude,
    }}>
      {show && <InfoWindow position={{
      lat: latitude,
    lng: longitude,
    }}>
        <div>
          <div>{clinic_name}</div>
          <div>{phone_number}</div>
          <div>{address}</div>
          <div>{zipcode}</div>
         </div>

       </InfoWindow>}
    </MarkerF>
  )
}
export default App;
