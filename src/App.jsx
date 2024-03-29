
import { useState } from 'react';
import './App.css'
import { FaqeerKyBety } from './components/FaqeerKyBety';
// import FaqeerKyBety from './components/FaqeerKyBety'; // If no {} indicates, default import.
// import MeiHonFaqeerkaBeta from './components/FaqeerKyBety'; // I can only change default components name.



function App() {
       const [name , setName] = useState("Abc");
return <div>
         <input
              type='text'
              onChange={(event) => setName(event.target.value)}
         />
         <FaqeerKyBety name={name} />
       </div>
}

export default App
