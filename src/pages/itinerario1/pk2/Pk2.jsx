import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import '../pk1/pk1.css'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Pk2({ totalScore, setTotalScore }){
    const navigate = useNavigate();
    return (
        <div className='pk1'>
            <SiteCard tittletext='La Albufera de Valencia ' storytext='Si hay un sitio en Valencia dónde no puedes perderte el atardacer este es la Albufera. La Albufera es una laguna de agua dulce situada cerca de la costa de Valencia, España. Es uno de los parajes naturales más importantes de la Comunidad Valenciana y un espacio protegido de gran valor ecológico, el Parque Natural de la Albufera. Se pueden realizar paseos en barca por la laguna, lo que ofrece una forma única de explorar este entorno natural y disfrutar de las vistas.'/>
            <QuizCard quiztext='La Albufera de Valencia se encuentra conectada con el mar a través de las golas. Estas golas son esenciales para el ecosistema de la Albufera, ya que permiten la circulación del agua y el intercambio de nutrientes entre la laguna y el mar. Además, juegan un papel importante en el mantenimiento del equilibrio salino y en la conservación de la biodiversidad de la zona. ¿Cuántas golas hay en La Albufera?' questionId={2} totalScore={totalScore} setTotalScore={setTotalScore} />
            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1pk1')} text='Atrás'/>
                <Button onClick={() => navigate('/itinerary1pk3')} text="Siguiente"/>
            </div>
        </div>
    );
}

Pk2.propTypes = {
    totalScore: PropTypes.number.isRequired,
    setTotalScore: PropTypes.func.isRequired,
};

export default Pk2;