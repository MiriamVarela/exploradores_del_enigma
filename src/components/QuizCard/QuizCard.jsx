import Explorador from '../../assets/images/Explorer1_quiz.png';
import './quizcard.css'
import PropTypes from 'prop-types';
import questionsData from '../../data/questions.json'; 

function QuizCard({ questionId, quiztext }) {
  const question = questionsData[questionId - 1]; 

  if (!question) {
    return null;
  }

  const { options } = question;

  return (
    <div className="quizcardiv">
      <div className="imgquiz">
        <img className="exploradorquiz" src={Explorador} alt="Explorador" />
        <p className="quiz">{quiztext}</p>
      </div>

      <div>
        <label className="label">{question.question}</label>
        <select>
          {Object.values(options).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}



QuizCard.propTypes = {
    quiztext: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired
    
  }


export default QuizCard;