import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import FreeCodeCampLogo from "./imagenes/fcc.png";
import { useState } from "react";

function App() {

  const [nClicks, setNClicks] = useState(0);

  const click = () => {
    setNClicks(nClicks + 1);
  };

  const reinicio = () => {
    setNClicks(0) 
  };

  return (
    <div className="App">
      <div className='logo-free-cont'>
        <img
        className='logo-free'
        src={FreeCodeCampLogo}
        alt='logo de free code camp'
        />
      </div>
      <div className="contadorConte">
        <Contador nClicks={nClicks} />
          <Boton
            texto="click"
            esBotonDeClick={true}
            click={click} />
          <Boton
            texto="reinicio"
            esBotonDeClick={false}
            click={reinicio} />
      </div>
    </div>
  );
};

export default App;
