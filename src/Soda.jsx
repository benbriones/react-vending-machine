import { Link } from "react-router-dom";


/** Component to render Soda Component
 *
 * Props: none
 * State: none
 *
 * App -> {VendingMachine, Chips, Soda, Sardines}
*/
export default function Soda() {
    return (
        <div className="Soda">
            <h1>OMGGGG SUGAR</h1>
            <Link to="/">GO BACK </Link>
        </div>
    );
}