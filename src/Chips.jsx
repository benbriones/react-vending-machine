import { useState } from "react";
import { Link } from "react-router-dom";


/** Component to render Chips Component
 *
 * Props: none
 * State: bagsEaten 
 *
 * App -> {VendingMachine, Chips, Soda, Sardines}
*/



export default function Chips() {
    const [bagsEaten, setBagsEaten] = useState(0);

    function handleClick() {
        setBagsEaten(count => count + 1);
    }

    return (
        <div className="Chips">
            <p>BAGS EATEN: {bagsEaten}</p>
            <button onClick={handleClick}>NOM NOM NOM</button>
            <Link to="/"> GO BACK </Link>
        </div>
    );
}