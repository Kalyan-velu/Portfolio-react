import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../../style/Contact.scss";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_121yjek",
        "contact_form",
        e.target,
        "CJ65XHHI8RUjbM2Ve"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message Sent to Kalyan")
        },
        (error) => {
          setError(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setDisabled(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(null)
      setError(null)
    }, 1000)
  }, [error, success])

  useEffect(() => {
    if (
      name.length > 3 &&
      email.length > 3 &&
      subject.length > 3 &&
      message.length > 3
    ) {
      setDisabled(false);
    }
  }, [name, email, subject, message]);

  return (
    <>
      <form className={"email_form"} onSubmit={sendEmail} >
        <div >
          <label>Your Name</label>
          <input
            type="text"
            name="from_name"
            min="3"
            onChange={nameHandler}
            value={name}
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            type="email"
            name="to_name"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            min="3"
            onChange={subjectHandler}
            value={subject}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows="7"
            cols="30"
            min="3"
            onChange={messageHandler}
            value={message}
          ></textarea>
        </div>
        <div className={"email_form__btn"} style={{ textAlign: "center" }}>
          <button
            className={disabled ? "email_form__btn__disabled" : "email_form__btn__enabled"}
            disabled={disabled}
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailForm;