import React, { useContext } from 'react';
import { DataContext } from '../../context';

export default function Header() {
  const { Query, Error } = useContext(DataContext);
  const setQuery = Query[1];
  const error = Error[0];

  const handleQuery = (e) => {
    e.preventDefault();
    const search = document.querySelector("[name='search-bar']").value;
    if (!search) return;
    setQuery(search);
  };

  return (
    <header>
      {error && <div className='error'>Invalid IP or Domain!</div>}
      <h2>IP Address Tracker</h2>
      <form onSubmit={handleQuery} autoComplete='off'>
        <input
          type='text'
          placeholder='Search for any IP Adress or Domain'
          name='search-bar'
        />
        <button type='submit' name='submit'>
          <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
            <path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
          </svg>
        </button>
      </form>
    </header>
  );
}
