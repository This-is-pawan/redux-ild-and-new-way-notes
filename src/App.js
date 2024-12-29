import React, { useReducer } from "react";
import img from "./ReduxNotes/card.svg";
const App = () => {
  const Reducer = (state, action) => {
    if (action.type === "SHOW") {
      return {show:!state.show,};
    }
    
  };
  const init = { show: true,  };

  const [state, disapath] = useReducer(Reducer, init);
  
  
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>Use Reducer</h1>
      {state.show ? (
        <div className="model">
          <div className="card">
            <h3>card</h3>
            <img src={img} alt="card img" className="img" title="card" />
            <p>
        
              card quisquam consequuntur pariatur deserunt rem a quibusdam
              similique optio.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="cardshow">
        <button
          className="btn"
          onClick={() => disapath({ type: "SHOW" })}
        >{`${state.show ? 'show to the card':'hide the card'}`}</button>
      </div>
    </>
  );
};

export default App;
