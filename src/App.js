import { useState } from 'react';
import './a.css';
import Hello from './Header'
import Use from './use';
import Counter  from './counter';
import Employee from './Employee';
import Update from './update'
import Axio from './Axio';



function App() {
 
 
  const data=' react'
  const [state,setstate]=useState(false)
  
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    
    
  }
 let emp=[{name:'anandhu',age:25},
 {name:'az',age:25},
{name:'ac',age:25}]

  return (
    <div>
     
      <button onClick={addCount}>add</button>
      <h1 style={{color:'red'}}>hello world {count}</h1>
      <p className="helo">this is a sample of {data}</p>
      
      <Hello Data1={data}/>
      
      <Counter title='1st counter' count1={count}/>
      <Counter title='2nd counter' count1={count}/>
     
      <h1 onClick={()=>setstate(!state)}>heyyy</h1>
      {state ?  <Update/> :null }
     
      <Use/>
      
     
     
      {emp.map((obj)=>{
        return(
          <Employee name={obj.name} age={obj.age}/>
        )
      })}


<Axio/>




    
    </div>
    
    
  );
}

export default App;


