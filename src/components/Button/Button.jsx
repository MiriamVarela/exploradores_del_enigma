import './button.css'
import PropTypes from 'prop-types';

function Button({ text, onClick }){
    return(
        <> 
            <button className="button" onClick={onClick}>{text}</button>
        </>
       
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

export default Button