import React from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function eventHandler(number) {
    dispatch({ type: "APPLY_NUMBER", payload: number });
  }
  function changeOperation(e) {
    dispatch({
      type: "CHANGE_OPERATION",
      payload: e.target.value,
    });
  }
  function totalAktarHandler() {
    dispatch({ type: "TOTALE_AKTAR" });
  }
  function memoryReset() {
    dispatch({ type: "MEMORY_SIFIRLA" });
  }

  function memoryHandler() {
    dispatch({ type: "MEMORY_EKLE" });
  }
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
                <b>{state.operation}</b>
              </span>
              <span id="memory">
                <b>{state.memory}</b>
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={memoryHandler} value={"M+"} />
              <CalcButton onClick={totalAktarHandler} value={"MR"} />
              <CalcButton onClick={memoryReset} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandler(1)} value={1} />
              <CalcButton onClick={() => eventHandler(2)} value={2} />
              <CalcButton onClick={() => eventHandler(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandler(4)} value={4} />
              <CalcButton onClick={() => eventHandler(5)} value={5} />
              <CalcButton onClick={() => eventHandler(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandler(7)} value={7} />
              <CalcButton onClick={() => eventHandler(8)} value={8} />
              <CalcButton onClick={() => eventHandler(9)} value={9} />
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
