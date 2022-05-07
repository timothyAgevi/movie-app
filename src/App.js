import { useState } from 'react';
import './App.css';

const App=()=> {
  //hook: anything called as a function begining with use
  //inside [nameod State,setterfunction]=useState(initialvalue) 
  const [counter,setCounter]=useState(0);
  return (
    <div className="App">
     <button> -</button>
     <h1> {counter}</h1>
     <button> +</button>
    </div>
  );
}

export default App;
