import React from 'react';

export default function Main() {
  return (
    <main>
      <ul>
        <li>
          <h5 className='info-title'>IP ADDRESS</h5>
          <h4 className='info-ip'>192.168.1.1</h4>
        </li>
        <li>
          <h5 className='info-title'>LOCATION</h5>
          <h4 className='info-ip'>Brooklyn, NY 10001</h4>
        </li>
        <li>
          <h5 className='info-title'>TIMEZONE</h5>
          <h4 className='info-ip'>UTC-5:00</h4>
        </li>
        <li>
          <h5 className='info-title'>ISP</h5>
          <h4 className='info-ip'>SPACE-X Starlink</h4>
        </li>
      </ul>
    </main>
  );
}
