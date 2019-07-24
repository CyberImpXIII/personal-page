import React, { useState, useEffect } from "react";

const App = props => {
  const [ctx, setCtx] = useState({});
  useEffect(()=>{
    var canvas = document.getElementById('sphere3d');              
    if(canvas.getContext){
      // 2D Context found
      var ctx = canvas.getContext('2d');
      
    } else {
      // 2D Context not found
    }
  },[])
  return (
    <>
    <Topbar />
    <Sidebar />
    <CanvasFocus />
    </>
  )
};
export default App;
