import { useState } from "react";

export const FaqeerKyBety = ({name}) => {
    const [faqeerKaBeta,  setFaqeerKaBeta ] = useState(1);
 return <>
      <div>
        <h1>My name is {name}</h1>
        <h1>I am {faqeerKaBeta} faqeer</h1>
        {/* <div></div> */}
      </div>
       <button onClick={() => {
              setFaqeerKaBeta((prev) => prev +2 )
       }}>
              Count++
       </button>

 </>
}
