import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import '../pk1/pk1.css'
import { useNavigate } from 'react-router-dom';

function Pk6(){
    const navigate = useNavigate();
    return (
        <div className='pk1'>
            <SiteCard tittletext='Barrio del Carmen ' storytext='Im taking you to the village of Lichères. I hope youre a good sailor! Follow me ! As you leave the town hall, turn left. When you reach turn right, towards the next spot.'/>
            <QuizCard quiztext='What weapon can you see engraved on a medieval tombstone, along the river Charente? Count the letters in this word and subtract 1. Look near the ford (shallow place in a river)' label='Tu respuesta es:'/>
            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1pk5')} text='Atrás'/>
                <Button text="Siguiente"/>
            </div>
        </div>
    );
}

export default Pk6;