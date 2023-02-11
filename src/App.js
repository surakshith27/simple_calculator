import React , { useState } from "react";
import './App.css';

function App() {
  const [num1, setNum1] = useState("Num1");
  const [num2, setNum2] = useState("Num2");
  const [ans, setAns] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [res, setRes] = useState("")

  const handeChange = (event) => { 
    const {name , value} = event.target;

    if(name === "num1") setNum1((value));
    else if(name === "num2") setNum2((value));
  };
  

  const handelAction = (action) => {
    if(isNaN(+num1)){
      setRes("");
      setAns("");
      setErr("Error : num1 cannot be empty");
      setMsg("");
  } else if(isNaN(+num2)){
      setRes("");
      setAns("");
      setErr("Error : num2 cannot be empty");
      setMsg("");
  } else {
    if (action === "+") setAns(parseInt(num1) + parseInt(num2));
    else if(action === "-") setAns(parseInt(num1) - parseInt(num2));
    else if(action === "*") setAns(parseInt(num1) * parseInt(num2));
    else if(action === "/") setAns(parseInt(num1) / parseInt(num2));
    setRes("Result = ");
    setMsg("Success : Your result is shown above!")
    setErr("");
  }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <input type="text" name = "num1" value={num1} onChange = {handeChange}/>
        <input type="text" name = "num2" value={num2} onChange = {handeChange}/>
        <div className="buttons">
          <button onClick={() =>{handelAction("+")}}>+</button>
          <button onClick={() =>{handelAction("-")}}>-</button>
          <button onClick={() =>{handelAction("*")}}>*</button>
          <button onClick={() =>{handelAction("/")}}>/</button>
        </div>
        <p>{res+ans}</p>
        <h2 className="msg">{msg}</h2>
        <h2 className="err">{err}</h2>
      </header>
    </div>
  );
}

export default App;
