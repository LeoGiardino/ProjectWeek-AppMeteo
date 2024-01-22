import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Mappa({ data }) {
  const [mapPosition, setMapPosition] = useState([0, 0]);

  useEffect(() => {
    if (data && data.coord) {
      setMapPosition([data.coord.lat, data.coord.lon]);
    }
  }, [data]);

  return (
    <>
      {data && data.hasOwnProperty('name') ? (
        <div className='carrello px-0 mb-4' style={{ height: '260px' }}>
          <MapContainer key={`${mapPosition[0]}-${mapPosition[1]}`} center={mapPosition} zoom={13} style={{ height: '100%', width: '100%', borderRadius: '10px' }}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; OpenStreetMap contributors' />
            <Marker position={mapPosition}>
              <Popup>{data.name}</Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        null
      )}
    </>
  );
}
