import React from "react";
import "../stylesheets/contador.css"

function Contador({ nClicks }){
    return(
        <div className="Contador">
            {nClicks}
        </div>
    );
}

export default Contador;