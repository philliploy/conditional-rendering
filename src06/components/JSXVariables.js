import React from 'react';

const name = 'Christian';
const thoughts = 'is amazing!!!';

function JSXVariables() {
   
  function getThoughts(){
    return ( 
      <>
    <h2>I think React ({thoughts})....</h2>
     <h3>this is phil</h3>
     </>
     )
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is ({name})</h1>
          <h2>My name has ({name.length}) letters</h2>
         
           { getThoughts()}
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
