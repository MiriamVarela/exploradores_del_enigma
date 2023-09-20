import { useState } from 'react';
import Pk1 from '../pk1/Pk1'; 
import Pk2 from '../pk2/Pk2';
import Pk3 from '../pk3/Pk3';
import Pk4 from '../pk4/Pk4';
import Pk5 from '../pk5/Pk5';
import Pk6 from '../pk6/Pk6'; 


function Itinerary1Valencia() {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <>
      
      <Pk1 totalScore={totalScore} setTotalScore={setTotalScore} />
      
      <Pk2 totalScore={totalScore} setTotalScore={setTotalScore} />

      <Pk3 totalScore={totalScore} setTotalScore={setTotalScore} />

      <Pk4 totalScore={totalScore} setTotalScore={setTotalScore} />

      <Pk5 totalScore={totalScore} setTotalScore={setTotalScore} />

      <Pk6 totalScore={totalScore} setTotalScore={setTotalScore} />
      
    </>
  );
}

export default Itinerary1Valencia;