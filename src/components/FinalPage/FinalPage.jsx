import './finalpage.css'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Explorador from '../../assets/images/Explorer1_quiz.png';
import questionsData from '../../../src/data/questions.json'


function FinalPage() {
  const [correctAnswersCount] = useState(
    parseInt(localStorage.getItem('correctAnswersCount')) || 0
  );

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('correctAnswersCount')) || 0;
    if (correctAnswersCount !== storedCount) {
      localStorage.setItem('correctAnswersCount', correctAnswersCount.toString());
    }
  }, [correctAnswersCount]);

  const totalQuestions = questionsData.totalQuestions;

  const correctPercentage = (correctAnswersCount / totalQuestions) * 100;

  let explorerType = null;
  if (correctPercentage >=67) {
    explorerType = 'experto';
  } else if (correctPercentage >= 33) {
    explorerType = 'medio';
  } else if (correctAnswersCount > 0) {
    explorerType = 'novato';
  }
  
  return (
    <div className='finalpage'>
        <h1>¡Felicidades, has completado el itinerario!</h1>
        <img className="exploradorfinal" src={Explorador} alt="Explorador" />
        <p>Puntuación final: {correctAnswersCount}</p>
        {explorerType && <p>¡Ya eres un explorador {explorerType}!</p>}
        
    </div>
  );
}

FinalPage.PropTypes = {
  totalScore: PropTypes.number.isRequired,
}

export default FinalPage;