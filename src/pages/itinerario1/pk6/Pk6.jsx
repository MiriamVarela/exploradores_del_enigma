import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import '../pk1/pk1.css'
import { useNavigate } from 'react-router-dom';

function Pk6(){
    const navigate = useNavigate();
    return (
        <div className='pk1'>
            <SiteCard tittletext='Jardín Botánico ' storytext='El Jardín Botánico de Valencia es un oasis verde situado en el corazón de la ciudad de Valencia, España. Fundado en 1802, es uno de los jardines botánicos más antiguos de España y de Europa. Además, el Jardín Botánico de Valencia es conocido por ser hogar de una comunidad de gatos callejeros. Estos gatos han encontrado refugio en el jardín y son cuidados por voluntarios y el personal del jardín.'/>
            <QuizCard quiztext='Entre otras especies que puedes encontrar en el Jardín se encuentra una zarza sin espinas. De esta zarza, cuenta la leyenda que San Benito se lanzó sobre las espinas de la planta. Todas las espinas quedaron clavadas en el cuerpo del santo mientras las zarzas quedaron sin ellas. Esta zarza ha sido transplantada desde una provincia del norte de España.' questionId={6}/>
            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1pk5')} text='Atrás'/>
                <Button text="Siguiente"/>
            </div>
        </div>
    );
}

export default Pk6;