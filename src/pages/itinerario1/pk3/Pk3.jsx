import Button from '../../../components/Button/Button';
import QuizCard from '../../../components/QuizCard/QuizCard';
import SiteCard from '../../../components/SiteCard/SiteCard';
import '../pk1/pk1.css'
import { useNavigate } from 'react-router-dom';

function Pk3(){
    const navigate = useNavigate();
    return (
        <div className='pk1'>
            <SiteCard tittletext='La ciudad de las ciencias ' storytext='La Ciudad de las Artes y las Ciencias (Ciutat de les Arts i les Ciències en valenciano) es un complejo arquitectónico y cultural diseñada por el arquitecto valenciano Santiago Calatrava y el arquitecto e ingeniero Félix Candela y situado en el antiguo cauce del río Turia en Valencia. Se compone de 6 elementos principales: LHemisfèric, El Museu de les Ciències Príncipe Felipe, LUmbracle, LOceanogràfic, Ágora y El Puente de lAssut de lOr. En el Hemisfèric, el edificio con forma de ojo, podrás disfrutar de una variedad de proyecciones en 3D y películas educativas sobre el espacio y la naturaleza. En el museo de las ciencias podrás visitar exposiciones interactivas sobre diversos temas científicos, desde la biología hasta la tecnología. En el Oceanografic, el acuario más grande de Europa, podrás descubrir una impresionante variedad de vida marina.'/>
            <QuizCard quiztext='Además de los lugares anteriores en las inmediaciones de la Ciudad de las Artes y las Ciencias encontrarás el Jardín de la Astronomía, diseñado para promover la comprensión y aprecio de la astronomía, así como para enseñar sobre la medición del tiempo en la antigüedad. Fíjate en el instrumento astronómico sencillo más antiguo: una simple barra plantada en el suelo que proyecta su sombra sobre un plano horizontal. Cuenta las letras que componen la palabra que designa a este instrumento. ' label='Tu respuesta es:'/>
            <div className='buttons'>
                <Button onClick={() => navigate('/itinerary1pk2')} text='Atrás'/>
                <Button onClick={() => navigate('/itinerary1pk4')} text="Siguiente"/>
            </div>
        </div>
    );
}

export default Pk3;