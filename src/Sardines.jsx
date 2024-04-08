import { Link } from "react-router-dom";


/** Component to render Sardines Component
 *
 * Props: none
 * State: none
 *
 * App -> {VendingMachine, Chips, Soda, Sardines}
*/

export default function Sardines() {
    return (
        <div className="Sardines">
            <h1>YOU DONT EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
            <Link to="/">GO BACK</Link>
        </div>
    );
}