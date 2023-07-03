import React from 'react'
import { useState } from 'react'
import DisplayName from './DisplayName'

export const validateName = (name) => {  
    if((name && isNaN(name)) || !name)  
      return false  
    return true  
}

export const validateAge = (age) => {
    if( age >= 18 )
    {
       console.log("You count in elders...");
       return false;
}
    else{
        console.log("You count in teen_agers...");
        return true;
    }

}
    

   const User = () => {  
    const [name,setName] = useState(null);  
    const [error,setError] = useState(false);  
    const [age, setAge] = useState(0);

    const [errorAge , setErrorAge] = useState(false);

    // onChange Function:
     const setUserName = (event) =>{  
      const {value} = event.target;  
      var isOk = validateName(value);  
      setError(isOk);  
      setName(value);  
    }  
    const setUserAge = (event) => 
    {
        const {value} = event.target;
        var isOk = validateAge(value);
        setErrorAge(isOk);
        setAge(value);
    }
  return (
    <div>  
    <DisplayName name={name} />  
    <input type="text" value={name} onChange={setUserName}/>  
    <input type="number" value={age} onChange={setUserAge}/>  

     {error &&<div>Error</div>}  
     {errorAge &&  <div>Error occurred due to teenage... </div>}
     
 </div>  
  )
}

export default User;

