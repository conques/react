import './App.css';
import Testimonio from "./componentes/testimonio.jsx"

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <h1>Esto es lo que dicen nuestros reptilianos tier 3 sobre free code camp:</h1>
        <Testimonio
          imagen="angela"
          nombre="angela ejemplo"
          pais="marte"
          cargo="Dictator perpetuo"
          empresa="marte"
          testimonio="sin la ayuda de free code camp jamas podria haber dado mi golpe de estado contra elon musk y tomado marte"
        />
        <Testimonio
          imagen="carlos"
          nombre="carlos example"
          pais="españa"
          cargo="comandante de las fuerzas expedicionarias anti ia"
          empresa="FEAI"
          testimonio="sin la ayuda de free code camp jamas podria haber hackeado los cerebros de los t-mil y dado la oportunidad de luchar"
        />
        <Testimonio
          imagen="maria"
          nombre="maria low creativity pls recharge"
          pais="argentina"
          cargo="hacker"
          empresa="error 404"
          testimonio="sin la ayuda de free code camp jamas podria haber hackeado el banco nacion y iprimido pesos infinitos increiblemente aun asi no devalue mas que los politicos"
        />
      </div>
    </div>
  );
}

export default App;
