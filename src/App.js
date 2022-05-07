import { useState ,useEffect} from 'react';
import './App.css';

const App=()=> {
  //hook: anything called as a function begining with use
  //inside [nameod State,setterfunction]=useState(initialvalue) 
  const [counter,setCounter]=useState(0);
  return (
    //callback:function within HOF/other function that lternas normal running of program.
    <div className="App">
     <button onClick ={()=>setCounter((prevCount)=>prevCount -1)}> -</button>
     <h1> {counter}</h1>
     <button onClick={()=>setCounter( (prevCount)=>prevCount + 1)}> +</button>
    </div>
  );
}

export default App;
