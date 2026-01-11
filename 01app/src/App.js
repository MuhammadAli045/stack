import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () =>{
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if(counter == 0){
      alert("value is minimum")
    }
    else{
    setCounter(counter - 1)
      }
  }
  return (
    <div className="App">
      <>
        <h1>Chai aur React</h1>
        <h1>Counter Value: {counter}</h1>
        <button onClick={addValue}>ADD</button>
        <button onClick={removeValue}>Remove</button>
      </>
    </div>
  );
}

export default App;
