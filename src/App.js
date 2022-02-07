import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/">
            <Home />
          </Route>
       
      </Routes>
    </BrowserRouter>

  );
}