import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import '../pk1/pk1.css'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Pk4({ totalScore, setTotalScore }){
    const navigate = useNavigate();
    return (
        <div className='pk1'>
            <SiteCard tittletext='Playa de la Malvarrosa ' storytext='Durante el siglo XIX, La Malvarrosa era un lugar muy popular entre la alta sociedad valenciana y se convirtió en un destino de veraneo muy prestigioso. Grandes personalidades, incluyendo la realeza, frecuentaban la playa y las villas de la zona. Este período de esplendor dejó una marca en la historia y la cultura de la ciudad. Disfruta del clima mediterráneo de Valencia y relájate por su paseo marítimo, sus arenas doradas y sus restaurantes a lo largo de la costa. Además, es un sitio que ha inspirado a artistas, poetas y escritores a lo largo de los años.'/>
            <QuizCard quiztext='La Playa de la Malvarrosa lleva su nombre en honor a la famosa novela "Blancaflor y Filomena", escrita por el poeta valenciano Vicente Blasco Ibáñez. Malvarrosa es el nombre de una de las protagonistas, una joven noble valenciana. ¿En qué año fue la novela publicada? Suma todas las cifras.' questionId={4} totalScore={totalScore} setTotalScore={setTotalScore} />
            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1pk3')} text='Atrás'/>
                <Button onClick={() => navigate('/itinerary1pk5')} text="Siguiente"/>
            </div>
        </div>
    );
}

Pk4.propTypes = {
    totalScore: PropTypes.number.isRequired,
    setTotalScore: PropTypes.func.isRequired,
};

export default Pk4;