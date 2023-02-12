import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Intro.module.css";
import {Skill} from "./Skill";
import {useEffect} from "react";

const Intro = () => {
  useEffect(()=>{
    document.title="Kalyan | Introduction"
  },[])
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
        <div className={classes.photoAndBio}>
          <div data-aos="fade-left">
            <h2>My Skills</h2>
            <p>
              Since I started coding and UI design, I've gotten some experience with a variety of tools and technologies. Every day, I try to learn something new, and as a result, I get my hands filthy with any technology that catches my eye. Figma is my go-to tool for wireframe and UI design. Although I do occasionally use Canva for UI design. For coding, I mostly use VS Code, and JetBrains IDEs.
              <br/>
              I've mentioned some of the technology and tools that I've used.
            </p>
            <IconContext.Provider value={{ color: "#00a6eb", size: "1rem" }}>
              <div className={classes.skill}>
                {Skill.map((skill,index)=>(
                    <p key={index}>{skill}</p>
                ))}
              </div>
            </IconContext.Provider>
          </div>
        </div>

      </div>
    </>
  );
};

export default Intro;