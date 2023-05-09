import React, { useRef, useState, useReducer, useCallback } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Input from "./FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATE_EMAIL } from "../shared/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
        name: action.iscool,
      };
    default:
      return state;
  }
};
function Contact() {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
  });
  // console.log(formState);

  // need usecallback to avoid the infinite loop since inputhander is called by child (input.js) in a useEffect so child rerenders when changed then triggers input handler to change the inputhandler triggers child and infinite loop occurs.   Usecallback runs it and then stores the function so it doens't get called infinitely and doesn't keep rerendering.
  const inputHandler = useCallback((id, value, isValid, iscool) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
      iscool: iscool,
    });
    // console.log(value);
  }, []);
  // const desc
  const form = useRef();
  const [emailSent, setEmailSent] = useState();
  const [emailNotif, setEmailNotif] = useState("Send");

  const sendEmail = e => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_9ap4aw4",
        "template_kfi0old",
        form.current,
        "MZtGOJxHMzBd17ci-"
      )
      .then(
        result => {
          console.log("Success!");
          setEmailSent(true);
          setEmailNotif(<p style={{ color: "green" }}>Email sent</p>);
        },
        error => {
          console.log("Failed");
          setEmailSent(false);
          setEmailNotif(<p style={{ color: "red" }}>Email sent</p>);
        }
      );
  };

  return (
    <div>
      {" "}
      <div className="about-wrapper" id="About">
        <div className="about-inner">
          <div className="contact-inner-col">
            <div className="about-title-wrapper">
              <div className="about-title">Get in touch</div>
              <div className="about-title-sub">
                Send us an email, or give us a call!
              </div>
            </div>
            <div className="contact-text">
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                {/* <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  title="Name"
                /> */}
                <Input
                  id="title"
                  type="text"
                  // label="Name"
                  placeholder="Name"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter a your name."
                  onInput={inputHandler}
                />
                <Input
                  id="email"
                  type="text"
                  // label="Name"
                  placeholder="Email"
                  element="input"
                  validators={[VALIDATE_EMAIL()]}
                  errorText="Please Enter a valid email."
                  onInput={inputHandler}
                />

                <Input
                  id="message"
                  type="text"
                  // label="Name"
                  placeholder="Enter your message."
                  element="textarea"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter a message."
                  onInput={inputHandler}
                />
                <button
                  className="button-arounder"
                  type="submit"
                  disabled={!formState.isValid}
                >
                  {emailNotif}
                </button>
              </form>
            </div>
          </div>
          <div className="contact-phonenumber-block">
            <div className="about-title-wrapper">
              <div className="about-title-sub" style={{ fontSize: 30 }}>
                Phone number
              </div>
            </div>
            <div
              className="contact-text-phonenumber"
              style={{ color: "white" }}
            >
              {/* {!formState.isValid && <p>true</p>} */}
              (613) 700 - 1030
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
