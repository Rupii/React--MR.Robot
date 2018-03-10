import React from 'react'

const Card = (args) => {
    const {name , email, id} = args;
 return (
     <div className = 'c tc bg-light-blue dib pa3 ma2 grow bw5 shadow-5'>  
     <img alt = "img" src = {`https://robohash.org/${id}??20x20`} />
         <div>  
             <h2> {name} </h2>
            <p> {email} </p>
         </div>
    </div>
 );   
}

export default Card;
