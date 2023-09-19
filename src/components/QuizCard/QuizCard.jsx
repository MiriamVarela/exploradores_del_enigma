import { useState } from 'react';
import Explorador from '../../assets/images/Explorer1_quiz.png';
import './quizcard.css'
import PropTypes from 'prop-types';
import questionsData from '../../data/questions.json'; 


function QuizCard({ questionId, quiztext }) {
  const question = questionsData[questionId - 1]; 
  
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  if (!question) {
    return <div>No hay pregunta disponible para este ID</div>;
  }

  const { options } = question;


  


  function handleOptionSelect(e) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsCorrect(selectedValue === questionsData[questionId - 1].correct_answer);
  }

  return (
    <div className="quizcardiv">
      <div className="imgquiz">
        <img className="exploradorquiz" src={Explorador} alt="Explorador" />
        <p className="quiz">{quiztext}</p>
      </div>

      <div>
        <label className="label">{question.question}</label>
        <select value={selectedOption} onChange={handleOptionSelect}>
        <option value="">Select an option</option>
          {Object.values(options).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {isCorrect === true && <p>¡Respuesta correcta!</p>}
      {isCorrect === false && <p>Respuesta incorrecta. Inténtalo de nuevo.</p>}
    </div>
  );
}



QuizCard.propTypes = {
    quiztext: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired
    
  }


export default QuizCard;