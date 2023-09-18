import Introitinerary from '../../../components/IntroItinerary/IntroItinerary';
import Button from '../../../components/Button/Button';
import './intro.css'
import { useNavigate } from 'react-router-dom';

function Intro(){
    const navigate = useNavigate();
    return (
        <>
        <Introitinerary sitetittle='Valencia' sitesbtittle='Desde las Rutas de la Seda hasta el Líder en Energías Renovables' locationtext='Este de España' currencytext=' Euro (EUR)' languagetext='Español y valenciano' dailycoststext=' 85€' foodertext='Paella y horchata'/>
        <Button onClick={() => navigate('/itinerary1pk1')} text="Siguiente"/>
        </>
        
    );
}

export default Intro;