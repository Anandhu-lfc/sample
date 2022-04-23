import React from 'react'
import axios from 'axios';
import {useState} from 'react'
function Axio() {
    const[state,setState]=useState([])
    return (
        <div>
            <h1>hello axio</h1>
            <button onClick={()=>{
                axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
                    console.log(Response.data)
                    setState(Response.data)
                })
            }}>click</button>
            {state.map((obj,index)=>{
                return(
                    <div>
                        <h1>{index}</h1>
                        <h1>{obj.title}</h1>
                        <h4>{obj.body}</h4>
                        </div>
                )
            })}

        </div>
    )
}

export default Axio
