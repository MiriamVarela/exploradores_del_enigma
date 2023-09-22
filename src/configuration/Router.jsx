import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pk1 from '../../src/pages/itinerario1/pk1/Pk1';
import Pk2 from '../../src/pages/itinerario1/pk2/Pk2';
import Pk3 from '../../src/pages/itinerario1/pk3/Pk3';
import Pk4 from '../../src/pages/itinerario1/pk4/Pk4';
import Pk5 from '../../src/pages/itinerario1/pk5/Pk5';
import Pk6 from '../../src/pages/itinerario1/pk6/Pk6';
import Intro from "../pages/itinerario1/intro/Intro";
import FinalPage from "../pages/itinerario1/Finalpage/Finalpage";

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/itinerary1intro" element={<Intro/>}></Route>
                <Route path="/itinerary1pk1" element={<Pk1/>}></Route>
                <Route path="/itinerary1pk2" element={<Pk2/>}></Route>
                <Route path="/itinerary1pk3" element={<Pk3/>}></Route>
                <Route path="/itinerary1pk4" element={<Pk4/>}></Route>
                <Route path="/itinerary1pk5" element={<Pk5/>}></Route>
                <Route path="/itinerary1pk6" element={<Pk6/>}></Route>
                <Route path="/itinerary1final" element={<FinalPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem