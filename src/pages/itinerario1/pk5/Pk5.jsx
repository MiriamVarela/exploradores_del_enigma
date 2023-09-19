import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import '../pk1/pk1.css'
import { useNavigate } from 'react-router-dom';

function Pk5(){
    const navigate = useNavigate();
    return (
        <div className='pk1'>
            <SiteCard tittletext='Barrio del Carmen ' storytext='El Barrio del Carmen, situado en el casco antiguo de la ciudad, es uno de los barrios más históricos y pintorescos de Valencia. Su combinación de historia, arte callejero, vida nocturna y ambiente bohemio lo convierte en un lugar único y encantador para explorar en la ciudad. El nombre "El Carmen" se deriva del antiguo Convento de Santa Clara, que estaba ubicado en la zona. Este convento, fundado por las Clarisas, fue conocido por las valencianas como "El Carmen". '/>
            <QuizCard quiztext=' En el Barrio del Carmen de Valencia, la "Casita del Gato" es una pequeña estructura que se asemeja a una gatera o una pequeña casa para gatos. Se trata de una instalación artística curiosa y única que ha capturado la imaginación de los visitantes. Encima del muro dónde se encuentra la casita puedes ver una escultura. ¿Qué figura representa?' label='Tu respuesta es:' questionId={5}/>
            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1pk4')} text='Atrás'/>
                <Button onClick={() => navigate('/itinerary1pk6')} text="Siguiente"/>
            </div>
        </div>
    );
}

export default Pk5;