
import { useState } from 'react';
import FinalPage from '../../../components/FinalPage/FinalPage';

function Finalpage() {
    const [totalScore] = useState(0);
  

  return (
    <>
        <FinalPage totalScore={totalScore}/>
    </>
    
  );
}

export default Finalpage;