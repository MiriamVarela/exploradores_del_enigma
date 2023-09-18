import './introitinerary.css'
import PropTypes from 'prop-types';
import Explorador from '../../assets/images/Explorer1_quiz.png';
import Valencia from '../../assets/images/Valencia.jpeg';

function introitinerary({ sitetittle, sitesbtittle, locationtext, currencytext, languagetext, dailycoststext,foodertext }){
    return(
        <> 
        <div className='itineraryblock'>
            <div className='itinerarytittle'>
                <img className='exploradorintro' src={Explorador} alt="explorador del lugar" />
                <div>
                    <h1>{sitetittle}</h1>
                    <p className='introsubtitle'>{sitesbtittle}</p>
                </div>
            </div>
            
            <div className='listintroblock'>
            <ul>
                    <li>Ubicación: {locationtext}</li>
                    <li>Moneda: {currencytext}</li>
                    <li>Idioma: {languagetext}</li>
                    <li>Coste medio: {dailycoststext}</li>
                    <li>Comida/Bebida: {foodertext}</li>

                </ul>
                <img className='imgplace' src={Valencia} alt="Ciudad de las ciencias" />
    </div>
    </div>
        </>
       
    );
}

introitinerary.propTypes = {
    sitetittle: PropTypes.string.isRequired,
    locationtext: PropTypes.string.isRequired,
    currencytext: PropTypes.string.isRequired,
    languagetext: PropTypes.string.isRequired,
    dailycoststext: PropTypes.string.isRequired,
    foodertext: PropTypes.string.isRequired
  }

export default introitinerary