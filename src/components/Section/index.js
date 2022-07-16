import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import ChangeView from './ChangeView';
import { DataContext } from '../../context';

export default function Map({ center, zoom }) {
  const { Location } = useContext(DataContext);
  const location = Location[0];
  return (
    <>
      <div id='map'>
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
          <ChangeView center={center} zoom={zoom} />
          <Marker position={location} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </MapContainer>
      </div>

      <footer className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://rapnavalez.github.io/'>Rafael Navalez</a>.
      </footer>
    </>
  );
}
