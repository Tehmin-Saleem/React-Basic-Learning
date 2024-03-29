
import { useState } from 'react';
import './App.css'
import { FaqeerKyBety } from './components/FaqeerKyBety';
// import FaqeerKyBety from './components/FaqeerKyBety'; // If no {} indicates, default import.
// import MeiHonFaqeerkaBeta from './components/FaqeerKyBety'; // I can only change default components name.



function App() {
return <div>
         {/* <MeiHonFaqeerkaBeta/> */}
         {/* <FaqeerKyBety/> */}
         <FaqeerKyBety name="Asad" name15="Abc" name14="Abc" name13="Abc" name12="Abc" name11="Abc" />
       </div>
}

export default App
