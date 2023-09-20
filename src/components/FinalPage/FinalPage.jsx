import './finalpage.css'
import PropTypes from 'prop-types';
import Explorador from '../../assets/images/Explorer1_quiz.png'

function FinalPage({ text, totalScore }) {
  return (
    <div className='finalpage'>
        <h1>¡Felicidades, has completado el itinerario!</h1>
        <img className="exploradorfinal" src={Explorador} alt="Explorador" />
        <p>Puntuación final: {totalScore}</p>
        <p>{text}</p>
    </div>
  );
}

FinalPage.propTypes = {
  text: PropTypes.string.isRequired,
  finalScore: PropTypes.number.isRequired,
};

export default FinalPage;