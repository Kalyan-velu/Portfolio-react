import { Link } from "../../action/link/Link";
import classes from "./Contact.module.css";

import EmailForm from "./Email";

import { FiMail, FiSmartphone, FiMapPin, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className={classes.contact}>
        <div className={classes.location} data-aos="fade-right">
          <div style={{ marginBottom: "20px" }}>
            <span>
              {" "}
              <FiMapPin />
            </span>{" "}
            <h3>Location:</h3>
            <div className={classes.contactText}>
              Namti Kukurachowa,
              Namti, Sivasagar
              Assam -785684
              India.
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiMail size={"20px"} />
            </span>{" "}
            <h3>Email:</h3>
            <div className={classes.contactText} style={{ marginLeft: "45px" }}>
              kalyanborah456@gmail.com
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiSmartphone />
            </span>{" "}
            <h3>Call:</h3>        
            <div>+91 9101725446</div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiLinkedin />
            </span>{" "}
            <h3>Linkedin:</h3>
            <div>
              <Link
                style={{ textDecoration: "none", color: "#000",fontSize:"small" }}
                className={classes.contactText}
                link="https://www.linkedin.com/in/kalyan-jyoti-borah-3595b5178/"
              >
               https://www.linkedin.com/in/kalyan-jyoti-borah-3595b5178/
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.emailSend} data-aos="fade-left">
          <EmailForm />
        </div>
      </div>
    </>
  );
};

export default Contact;