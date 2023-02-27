import React from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function applyNumber(e) {
    dispatch({ type: "APPLY_NUMBER", payload: e.target.value });
  }
  function changeOperation(e) {
    dispatch({
      type: "CHANGE_OPERATION",
      payload: e.target.value,
    });
  }

  /*  function addOne() {
    dispatch({ type: "ADD_ONE" });
  } */
  function clear() {
    dispatch({ type: "CLEAR_DISPLAY" });
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>{state.operation}</b> X
              </span>
              <span id="memory">
                <b>{state.memory}</b> 0
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={applyNumber} value={1} />
              <CalcButton onClick={applyNumber} value={2} />
              <CalcButton onClick={applyNumber} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={applyNumber} value={4} />
              <CalcButton onClick={applyNumber} value={5} />
              <CalcButton onClick={applyNumber} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={applyNumber} value={7} />
              <CalcButton onClick={applyNumber} value={8} />
              <CalcButton onClick={applyNumber} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={changeOperation} value={"+"} />
              <CalcButton onClick={changeOperation} value={"*"} />
              <CalcButton onClick={changeOperation} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clear} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
