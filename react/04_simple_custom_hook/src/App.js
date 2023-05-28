import logo from './logo.svg';
import './App.css';
import useCount from './hooks/useCount';

function App() {

  const [value,add,substract] = useCount();

  return (
    <div className="App">
      <h4>Count:{value}</h4>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
   
    </div>
  );
}

export default App;
