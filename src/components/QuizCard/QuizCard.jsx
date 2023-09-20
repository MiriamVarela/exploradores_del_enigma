import { useState } from 'react';
import Explorador from '../../assets/images/Explorer1_quiz.png';
import './quizcard.css'
import PropTypes from 'prop-types';
import questionsData from '../../data/questions.json'; 


function QuizCard({ questionId, quiztext, setTotalScore }) {
  const question = questionsData[questionId - 1]; 
  
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  if (!question) {
    return <div>No hay pregunta disponible para este ID</div>;
  }

  const { options } = question;


  


  function handleOptionSelect(e) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsCorrect(selectedValue === questionsData[questionId - 1].correct_answer);
  
    if (selectedValue === questionsData[questionId - 1].correct_answer) {
        setCorrectAnswersCount(prevCount => prevCount + 1);
        setTotalScore(prevScore => prevScore + 1);
    }
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
      {correctAnswersCount >= 2 && <p>¡Ya eres un explorador novato!</p>}
      {correctAnswersCount >= 4 && <p>¡Ya eres un explorador medio!</p>}
      {correctAnswersCount >= 6 && <p>¡Ya eres un explorador experto!</p>}
    </div>
  );
}



QuizCard.propTypes = {
    quiztext: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    setTotalScore: PropTypes.func.isRequired
    
  }


export default QuizCard;