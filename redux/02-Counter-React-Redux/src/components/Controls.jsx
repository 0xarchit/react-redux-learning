import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const Add = () => {
    dispatch({ type: "ADD", payload: Number(inputElement.current.value) });
    inputElement.current.value = "";
  };
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-success btn-sm px-4 gap-3"
        onClick={increment}
      >
        + 1
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm px-4"
        onClick={decrement}
      >
        - 1
      </button>
      <button
        type="button"
        className="btn btn-danger btn-sm px-4"
        onClick={reset}
      >
        Reset
      </button>
      <input type="number" placeholder="Enter number" ref={inputElement} />
      <button type="button" className="btn btn-info btn-sm px-4" onClick={Add}>
        Submit
      </button>
    </div>
  );
};
export default Controls;
