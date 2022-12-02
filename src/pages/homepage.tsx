import React, {FunctionComponent} from "react";
import {Link} from "react-router-dom";

const Homepage: FunctionComponent = () => {
    return(
        <div className="container">
            <button className="btn grey darken-3"><Link to='/creatures' className="red-text text-lighten-2">Créatures</Link></button>
            <button className="btn grey darken-3"><Link to='/weapons' className="red-text text-lighten-2">Armes</Link></button>
        </div>
    )
}

export default Homepage;