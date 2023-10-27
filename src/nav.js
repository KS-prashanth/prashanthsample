// Only the navigation links should be

import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to= "/">Excersises</Link>
            <Link to= "/">Excersise 5</Link>
            <Link to= "/e6">Excersise 6</Link>
            {/* <Link to= "/tuiter">Tuiter</Link> */}
        </div>
    )
}

export default Nav;