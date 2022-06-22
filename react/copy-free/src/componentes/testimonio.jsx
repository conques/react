import React from "react";
import "../stylesheets/testimonio.css"

function Testi(props){
    return (
        <div className="mainContainerTesti">
            <img src={require(`../imagenes/testi-${props.imagen}.jpg`)} alt="foto de angela"  className="fotoTesti" />
            <div className="textosTesti">
                <p className="nombreTesti">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargoTesti">
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className="textoTesti">"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testi;