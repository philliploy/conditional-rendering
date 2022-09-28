import React from "react";
// We import our HelloDiv from the components folder
  import {HelloDiv,ByeDiv, Greet } from "./components/HelloDiv";

  import Navbar from './components/NavBar'

// App is our top-level main component that references other components
function App() {
  return (
  <div>
      <Navbar/>
      <ByeDiv/>
       <HelloDiv />
       <Greet/>
  </div>
 
  )
  ;
}

export default App;
