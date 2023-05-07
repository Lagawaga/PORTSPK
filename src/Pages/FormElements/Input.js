import React, { useReducer } from "react";
import "./Input.css";
const inputReducer = (state, action) => {
  console.log(action.isValid);
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: action.isValid,
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};
const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: "john",
  });

  const changeHandler = event => {
    console.log(event.target.value.length);
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      isValid: event.target.value.length !== 0,
    });
  };

  const emailHandler = event => {
    console.log(event.target.value.length);
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      isValid: event.target.value.includes("@"),
    });
  };
  const touchHandler = event => {
    dispatch({
      type: "TOUCH",
      val: event.target.value,
      isValid: event.target.value,
    });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
