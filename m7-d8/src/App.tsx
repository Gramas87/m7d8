import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainSearch from './components/MainSearch';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainSearch />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
