import React, { useContext } from 'react';
import { DataContext } from '../../context';

export default function Header() {
  const { Query, Error } = useContext(DataContext);
  const [query, setQuery] = Query;
  const [error, setError] = Error;

  const handleQuery = (e) => {
    e.preventDefault();
    const search = document.querySelector("[name='search-bar']").value;
    if (!search) return;
    setQuery(search);
  };

  return (
    <header style={{ backgroundImage: `url(/images/pattern-bg.png)` }}>
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
