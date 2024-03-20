
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(1);
  const handleCount = ()=>{
      setCount(count+1);
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={handleCount}> click me </button>
    </div>
  );
}

export default App;
