import React from "react";
import "../stylesheets/boton.css"

function Boton({ texto, esBotonDeClick, click }) {
    return (
        <button
            className={ esBotonDeClick ? "botonClick" : "botonReiniciar" } onClick={click}>
            {texto}
        </button>
    );
}

export default Boton;