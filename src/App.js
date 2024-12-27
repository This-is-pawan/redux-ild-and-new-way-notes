import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const mystate = useSelector((state) => state.changeNum); // Corrected useSelector
  const dispatch = useDispatch(); // Use dispatch for actions

  const handleClick = () => {
    dispatch({ type: 'INCREMENT' }); 
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Welcome to My React Redux</h1>
      <h2 style={{ textAlign: 'center' }}>Current Number: {mystate}</h2>
      <button className="btn" onClick={handleClick}>
        Click to Increment
      </button>
    </>
  );
}

export default App;
