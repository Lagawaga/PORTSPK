import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../shared/validators";
const inputReducer = (state, action) => {
  //console.log(action.isValid);
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
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
    isValid: false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
    // console.log(value);
    //  console.log(isValid);
  }, [id, value, isValid, onInput]);
  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = event => {
    // console.log("touched");
    dispatch({
      type: "TOUCH",
      val: event.target.value,
      validators: props.validators,
      // isValid: event.target.value,
      // isTouched: event.target.value === "",
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
        placeholder={props.placeholder}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      {/* {inputState.isTouched && <p>true</p>} */}
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
