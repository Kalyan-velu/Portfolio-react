import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Intro.module.css";
import qualifiPhoto from "../../../../assests/images/qualification.png";



const Intro = () => {
  return (
    <>
      <div className={classes.intro} id="about">
        <div className={classes.photoAndBio}>
          <div data-aos="fade-left">
            <h2>Bio</h2>
            <p>
              Web developer professional with year of experience writing,
              reviewing and fixing code aiming for a position , where I
              contribute to a dynamic and growing IT team.
            </p>
            <IconContext.Provider value={{ color: "#00a6eb", size: "1rem" }}>
              <div className={classes.bio}>
                <ul>
                  <li>
                    <FaAngleRight />
                    <span>Degree:</span> BCA
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>Age:</span> 22
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>City:</span> Sivasagar, Assam.
                  </li>
                </ul>

                <ul>
                  <li>
                    <FaAngleRight />
                    <span>Birthday:</span> 13 Sept 2001
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>Phone:</span> +91 9101725446
                  </li>

                  
                </ul>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        {/* <div className={classes.education}>
          <h2>Education</h2>
          <div className={classes.qualification}>
            <div className={classes.qualificationItem} data-aos="fade-right">
              <div>
                {educationsDetails1.map((item) => (
                  <div className={classes.listDesign} key={item.id}>
                    <h3>{item.name}</h3>
                    <div>{item.duration}</div>
                    <p>
                      {item.destination} <br />
                      {item.native && item.native}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                {educationsDetails2.map((item) => (
                  <div className={classes.listDesign} key={item.id}>
                    <h3>{item.name}</h3>
                    <div>{item.duration}</div>
                    <p>
                      {item.destination} <br />
                      {item.native && item.native}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src={qualifiPhoto}  alt="qualification"/>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Intro;