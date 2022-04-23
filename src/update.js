
import React, {useState,useEffect } from 'react';
function Update() {
    useEffect(()=>{
        
    })
    
    const[updat,setUpdate]=useState(0)
    const sett=()=>{
        setUpdate(updat+1)
    }
    return (
        <div>
            <button onClick={sett}>update</button>
           <h1>hello iam :{updat}</h1> 
        </div>
    )
}

export default Update
