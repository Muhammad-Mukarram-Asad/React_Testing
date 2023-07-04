import React from 'react'
import { useState } from 'react'

function Toggle() {
    const [showText, setShowText] = useState(false);

    const changeText = () => {
        setShowText(!showText);
    }
  return (
    <div>
        
           <h1>This Text is toggle text</h1>
      

        <button onClick={changeText}>
           {showText ? 'Hide' : 'Show'}   
        </button>
      
    </div>
  )
}

export default Toggle
