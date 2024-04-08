import { useState } from 'react';
import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import VendingMachine from "./VendingMachine"

/** Component to render Vending Machine App
 *
 * Props: none
 * State: none
 *
*/

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path="/chips" element={<Chips />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
