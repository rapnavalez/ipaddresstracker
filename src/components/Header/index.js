import React from 'react';

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(/images/pattern-bg.png)` }}>
      <h2>IP Address Tracker</h2>
      <form>
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
