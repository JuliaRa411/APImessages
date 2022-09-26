

import React, { useState, useEffect } from "react";
import "./App.css"
function App() {

  const [tips, setTips] = useState("");


  const fetchTips = async () => {

  const response = await fetch(

      "http://www.boredapi.com/api/activity/"

    );

   const data = await response.json();

   setTips(data.activity);

  };


  useEffect(() => {

    fetchTips();

  }, []);


  return (

  <div className="App">
  <div className="container">

  <p> {tips} </p>

 <div className="btn"> 
  <button onClick={fetchTips}>New Tip</button>
 </div>
 
 </div>
 </div>
     
    
  );

}


export default App;
