import React from 'react';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
//props={
//   type,
//   message
// }

function Alert({type,message}) {
 

  return (
    <div className={`alert alert-${type || 'success'}`} role="alert">
      {message}
    </div>
  );
}

export default Alert;
