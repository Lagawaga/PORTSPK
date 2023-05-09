import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Input from "./FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATE_EMAIL } from "../shared/validators";

function Contact() {
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
                  // onInput={inputHandler}
                />
                <Input
                  id="email"
                  type="text"
                  // label="Name"
                  placeholder="Email"
                  element="input"
                  validators={[VALIDATE_EMAIL()]}
                  errorText="Please Enter a valid email."
                  // onInput={inputHandler}
                />

                <Input
                  id="email"
                  type="text"
                  // label="Name"
                  placeholder="Enter your message."
                  element="textarea"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter a message."
                  // onInput={inputHandler}
                />
                <button className="button-arounder" type="submit">
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
              (613) 700 - 1030
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
