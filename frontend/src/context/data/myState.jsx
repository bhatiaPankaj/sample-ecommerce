import myContext from "./myContext";

import React, { useState } from "react";

export default function myState({children}) {
    // const state = {
    //     name: "John",
    //     age: 30,
    //     address: "USA",
    //     email: "abc@xyz.com"
    // }
    // const color = "red";
    const [mode , setMode] = useState("light");
    const toggleMode = ()=>{
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "rgb(#212121)";
        }else{
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    }
  return (
    <myContext.Provider value={{ mode, toggleMode }}>
      {children}
    </myContext.Provider>
  );
}
