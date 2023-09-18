import Explorador from '../../assets/images/Explorer1_quiz.png';
import './quizcard.css'
import PropTypes from 'prop-types';


function QuizCard({quiztext, label, type}){
    return(
        <> 
            <div className='quizcardiv'>
                <div className='imgquiz'>
                    <img className='exploradorquiz' src={Explorador} alt="Explorador"/>
                    <p className='quiz'>{quiztext}</p>                  
                </div>
               
               <div>
                    <label className='label'>{label}</label>
                    <input type={type} />
                </div>
    
            </div>
            
            
        </>
       
    );
}

QuizCard.propTypes = {
    quiztext: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }


export default QuizCard