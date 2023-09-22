import { useState, useEffect } from 'react';
import Explorador from '../../assets/images/Explorer1_quiz.png';
import './quizcard.css'
import PropTypes from 'prop-types';
import questionsData from '../../data/questions.json'; 


function QuizCard({ questionId, quiztext }) {
  
  const { questions } = questionsData;
  const question = questions[questionId - 1]; 
  
  
  
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(
    parseInt(localStorage.getItem('correctAnswersCount')) || 0
  );
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('correctAnswersCount')) || 0;
    if (correctAnswersCount !== storedCount) {
    localStorage.setItem('correctAnswersCount', correctAnswersCount.toString());
    }
  }, [correctAnswersCount]);

  


  


function handleOptionSelect(e) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsCorrect(selectedValue === question.correct_answer);
  
    if (selectedValue === question.correct_answer) {
        setCorrectAnswersCount(prevCount => prevCount + 1);
        localStorage.setItem('correctAnswersCount', correctAnswersCount + 1);
    }
}

if (!question) {
  return <div>No hay pregunta disponible para este ID</div>;
}

const { options } = question;

const correctPercentage = (correctAnswersCount / questionsData.totalQuestions) * 100;

let explorerType = null;
if (correctPercentage >= 33 && correctPercentage < 67) {
  explorerType = 'novato';
 } else if (correctPercentage >= 67 && correctPercentage <100) {
  explorerType = 'medio';
 } else if (correctPercentage === 100) {
  explorerType = 'experto';
 }


return (
    <div className="quizcardiv">
      <div className="imgquiz">
        <img className="exploradorquiz" src={Explorador} alt="Explorador" />
        <p className="quiz">{quiztext}</p>
      </div>

      <div>
        <label className="label">{question.question}</label>
        <select className="dropdown" value={selectedOption} onChange={handleOptionSelect}>
        <option value="">Escoge una opción</option>
          {Object.values(options).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {isCorrect === true && <p>¡Respuesta correcta!</p>}
      {isCorrect === false && <p>Respuesta incorrecta. Inténtalo de nuevo.</p>}
      <p>Respuestas correctas acumuladas: {correctAnswersCount}</p>
      {explorerType && <p>¡Ya eres un explorador {explorerType}!</p>}
    </div>
  );
}



QuizCard.propTypes = {
    quiztext: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired
    
  }


export default QuizCard;