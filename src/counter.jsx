import React from 'react'

function Counter(props) {
    const {title,count1}=props
    return (
        <div>
             <h1>{title}{count1}</h1>
        </div>
    )
}

export default Counter
