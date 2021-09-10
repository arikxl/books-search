import React from 'react';

import './App.css';
import SearchBar from './cmps/SearchBar';
import BookData from './Data.json';

function App() {
  return (
    <div className="App">
        <SearchBar placeholder="enter a book name..." data={BookData} />
    </div>
  );
}

export default App;
