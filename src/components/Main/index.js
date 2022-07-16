import React, { useContext } from 'react';
import { DataContext } from '../../context';

export default function Main() {
  const { Data } = useContext(DataContext);
  const data = Data[0];
  return (
    <main>
      {data.ip ? (
        <ul>
          <li>
            <h5 className='info-title'>IP ADDRESS</h5>
            <h4 className='info-ip'>{data.ip}</h4>
          </li>
          <li>
            <h5 className='info-title'>LOCATION</h5>
            <h4 className='info-location'>{`${data.location.city}, ${
              data.location.country
            } ${data.location.postalCode && data.location.postalCode}`}</h4>
          </li>
          <li>
            <h5 className='info-title'>TIMEZONE</h5>
            <h4 className='info-timezone'>{`GMT ${data.location.timezone}`}</h4>
          </li>
          <li>
            <h5 className='info-title'>ISP</h5>
            <h4 className='info-isp'>{data.isp}</h4>
          </li>
        </ul>
      ) : (
        <h2>IP Address or Domain not found!</h2>
      )}
    </main>
  );
}
