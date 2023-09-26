import React from 'react';

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

// import L for "react-leaflet"
import L from "leaflet"

// for at få marker til at virke
import iconMarker from "leaflet/dist/images/marker-icon.png"
import iconRetina from "leaflet/dist/images/marker-icon-2x.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow
})


const LeafletMap = ({coord = [56,10], popupinfo = "Find os her "}) => {



    return (
        <div className=''>

            <MapContainer center={coord} zoom={10} style={{ width: "100%", height: "400px" }} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coord} icon={icon}>
                    <Popup content={popupinfo}/>
                </Marker>
            </MapContainer>

        </div>
    );
}

export default LeafletMap;
