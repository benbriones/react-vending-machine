
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";

/** Component to render Vending Machine App
 *
 * Props: none
 * State: none
 *
 * App -> {VendingMachine, Chips, Soda, Sardines}
*/

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
