import React from 'react';
import { Routes, Route } from 'react-router-dom'
import CharacterDetails from '../CharacterDetails';
import CharacterList from '../CharacterList';
import './App.css';
import FavouriteList from '../FavouriteList';

function App() {
  return (
    <div className="app">
      <h2 className='app__heading'> Star Wars </h2>
      <div className="app__container">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/fav/" element={<FavouriteList />} />
        <Route path="/fav/:id" element={<CharacterDetails />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
