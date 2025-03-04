"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Section from "../Section/Section";
import { ContactProps } from "../../types";

const Contact: React.FC<ContactProps> = ({serviceKey, templateKey, publicKey}) => {
  const [isSuccessful, setIsSuccessful] = useState<string | null>(null);

  console.log('Keys = ' + serviceKey + ' ' + templateKey + ' ' + publicKey);

  const form = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceKey || !templateKey || !publicKey) {
      console.error("Error: Missing EmailJS keys");
      setIsSuccessful("error");
      return;
    }

    emailjs.sendForm(serviceKey, templateKey, form.current!, publicKey).then(
      (result) => {
        validateSuccess(true);
        console.log(result.text);
      },
      (error) => {
        validateSuccess(false);
        console.log(error.text);
      }
    );

    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  function validateSuccess(result: boolean) {
    setIsSuccessful(result ? "success" : "error");
  }

  return (
    <Section title="Contact">
      <div id="contact-div">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-heading">
            <h3>Contact Me</h3>
            <h5>For more information</h5>
          </div>
          <div className="input-group">
            <div className="input-item">
              <label htmlFor="user_name">Name</label>
              <input
                ref={nameRef}
                type="text"
                name="user_name"
                id="user_name"
                className="contact-input"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="input-item">
              <label htmlFor="user_email">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="user_email"
                id="user_email"
                className="contact-input"
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            ref={messageRef}
            name="contact-message"
            placeholder="Enter your message"
          />
          <input type="submit" value="Send" className="submit" />

          {isSuccessful === "success" ? (
            <p className="contact-success">Your message has been sent</p>
          ) : isSuccessful === "error" ? (
            <p className="contact-error">There was an error sending your message.</p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}

export default Contact;