
//import { useLocation } from 'react-router-dom';

function FinalPage() {
  {/*const location = useLocation();
const { respuestasCorrectas } = location.state;*/}

  return (
    <div className="final-page">
      <h1>¡Felicidades, explorador!</h1>
      {/*<p>Tu puntuación final es: {respuestasCorrectas} puntos</p>*/}
      <p>¡Eres un auténtico experto!</p>
    </div>
  );
}

export default FinalPage;