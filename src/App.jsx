
import { useState } from 'react';
import './App.css'

function App() {

       // const [faqeerKaBeta,  setFaqeerKaBeta ] = useState(1);
       let faqeerKaBeta = 1;
 return <>
        <h1>I am single faqeer</h1>
        <h1>I am {faqeerKaBeta} faqeer</h1>
       <button onClick={() => {
              // setFaqeerKaBeta((prev) => prev + 2)
              console.log(faqeerKaBeta++);
       }}>
              Count++
       </button>

 </>
}

export default App
