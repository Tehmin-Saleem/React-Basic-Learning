
import { useState } from 'react';
import './App.css'
import { FaqeerKyBety } from './components/FaqeerKyBety';
import Products from './components/Products';
// import FaqeerKyBety from './components/FaqeerKyBety'; // If no {} indicates, default import.
// import MeiHonFaqeerkaBeta from './components/FaqeerKyBety'; // I can only change default components name.



function App() {
       const [name , setName] = useState("Abc");
return <div>
         <Products name ="isko zarroat nahiii phr bhii mei pass kar rha hon"/>
       </div>
}

export default App
