import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const InfoProvider = (props) => {
  const [ip, setIP] = useState('');
  const [query, setQuery] = useState(ip);
  const [data, setData] = useState({});
  const [location, setLocation] = useState([51.509, -0.08]);
  const [error, setError] = useState(false);

  //get user's IP address
  const getIp = async () => {
    const response = await axios.get('https://geolocation-db.com/json/');
    setIP(response.data.IPv4);
  };

  useEffect(() => {
    getIp();
  }, []);

  //get data based on IP address
  const getdata = async (query) => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_8s1e2bfV14jshMuK5FwQl0uHadQm8&domain=${query}`
    );
    const data = response.json();
    return data;
  };

  useEffect(() => {
    setError(false);
    getdata(query).then((res) => {
      if (res.code >= 400) {
        setError(true);
      } else {
        setData(res);
      }
    });
  }, [query]);

  return (
    <DataContext.Provider
      value={{
        Data: [data, setData],
        Query: [query, setQuery],
        Location: [location, setLocation],
        Error: [error, setError],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
