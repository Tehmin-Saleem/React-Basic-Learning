
import { useState } from 'react';
import './App.css'
import { FaqeerKyBety , FaqeerKyBety1 } from './components/FaqeerKyBety';
// import FaqeerKyBety from './components/FaqeerKyBety'; // If no {} indicates, default import.
// import MeiHonFaqeerkaBeta from './components/FaqeerKyBety'; // I can only change default components name.



function App() {
return <>
         {/* <MeiHonFaqeerkaBeta/> */}
         {/* <FaqeerKyBety/> */}
         <FaqeerKyBety1/>
       </>
}

export default App
