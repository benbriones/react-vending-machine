import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


/** Component for Vending Machine
 *
 *
 *
*/

export default function VendingMachine() {
    return (
        <div className="VendingMachine">
            <div> Welcome to the Vending Machine</div>
            <p><Link to="/chips">Chips</Link></p>
            <p><Link to="/soda">Soda</Link></p>
            <p><Link to="/sardines">Sardines</Link></p>
        </div>
    )
}