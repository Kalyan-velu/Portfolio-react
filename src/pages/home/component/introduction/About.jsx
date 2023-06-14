import React from 'react'
import "./style/Intro.scss"
import RandomText from '../randomText/RandomText'
const About = () => {
   return (
      <div
         className="skewElem absolute bottom-16 flex flex-col mobile:left-1/2 mobile:-translate-x-full text-primary text-3xl font-bold mobile:text-xl"
      >
         <h1>My full name is Kalyan Jyoti Borah</h1>
         <h1 className="flex flex-row gap-3">
            <span>and</span> <span>I'm</span> <span>a</span>
            <RandomText
               cycle={[
                  "Passionate Programmer",
                  "React Developer",
                  "Android Developer",
                  "Web Developer",
               ]}
               color="random"
            />
         </h1>
      </div>
   )
}

export default About