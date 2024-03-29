import { useState } from "react";

const FaqeerKyBety = () => {
    const [faqeerKaBeta,  setFaqeerKaBeta ] = useState(1);
 return <>
        <h1>I am single faqeer</h1>
        <h1>I am {faqeerKaBeta} faqeer</h1>
       <button onClick={() => {
              setFaqeerKaBeta((prev) => prev +2 )
       }}>
              Count++
       </button>

 </>
}


const FaqeerKyBety1 = () => {
    const [faqeerKaBeta,  setFaqeerKaBeta ] = useState(1);
 return <>
        <h1>I am single faqeer</h1>
        <h1>I am {faqeerKaBeta} faqeer</h1>
       <button onClick={() => {
              setFaqeerKaBeta((prev) => prev +2 )
       }}>
              Count++
       </button>

 </>
}

export {FaqeerKyBety, FaqeerKyBety1}