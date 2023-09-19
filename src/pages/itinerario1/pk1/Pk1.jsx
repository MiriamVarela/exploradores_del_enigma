import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import './pk1.css'
import { useNavigate } from 'react-router-dom';



function Pk1(){
    const navigate = useNavigate();


    return (
        <div className='pk1'>
            <SiteCard tittletext='Parque de Gulliver' storytext='Empezamos nuestra visita a Valencia en un lugar dónde vas a sentirte como un auténtico explorador en una tierra gigante. El Parque Gulliver en Valencia es una gran escultura de Jonathan Swift que se encuentra tumbada en el suelo. Está diseñada para que parezca que Gulliver ha sido atado por los liliputienses.'/>
            <QuizCard quiztext='Gulliver es un parque para que niños y mayores se diviertan explorando y escalando el gigante mediante escaleras, cuerdas y toboganes. ¿Cuántos toboganes puedes contar?' label='Tu respuesta es:' questionId={1} /> 

            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1intro')} text='Atrás'/>
                <Button onClick={() => navigate('/itinerary1pk2')} text="Siguiente"/>
            </div>
        </div>
    );
}

export default Pk1;