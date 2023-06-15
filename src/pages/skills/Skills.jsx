import React from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MySkills } from './lib/Skills'
import { getAverageColor, getVisibleColor } from './logic/SkillLogic'
import Wave from './component/Spacer'
import "./style/Skills.scss"

gsap.registerPlugin(ScrollTrigger)
const defaultTheme = '#455A64';

const Skills = () => {
   const [theme, setTheme] = React.useState(defaultTheme);
   const skillsContainerRef = React.useRef(null);


   const handleMouseOver = async (skill) => {
      const newTheme =
         skill.color && skill.color !== "#"
            ? skill.color
            : await getAverageColor(skill.imageUrl);
      setTheme(newTheme);
   };

   const handleMouseLeave = () => {
      setTheme(defaultTheme);
   };
   React.useEffect(() => {
      const skillsContainer = skillsContainerRef.current;

      MySkills?.forEach(async (skill) => {
         const hex = await getAverageColor(skill.imageUrl);
         skill.color = hex;
         skill.textColor = getVisibleColor(hex);
      });

      gsap.fromTo(
         skillsContainer,
         { opacity: 0, y: 100 },
         { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: skillsContainer }
      );
   }, []);

   return (
      <div className="h-16 bg-background">
         <section
            id="skills"
            className='skills p-page z-[2]'
            style={{
               backgroundColor: theme,
               transition: "800ms"
            }}
         >
            <h1
               className="p-10 transition-300 text-3xl font-semibold text-center"
               style={{ color: getVisibleColor(theme) }}
            >
               Tech I've worked with
            </h1>
            <div className="skills-container flex flex-row justify-evenly flex-wrap py-8 gap-x-10 gap-y-10" ref={skillsContainerRef}>
               {MySkills.map((skill, index) => (
                  <div key={index}>
                     <img
                        key={index}
                        className="skill-icon w-14 aspect-square object-contain mobile:w-8"
                        src={skill.imageUrl}
                        alt={skill.name}
                        loading="lazy"
                        style={{ "--skill-shadow": getVisibleColor(theme) }}
                        data-blobity-tooltip={skill.name.toUpperCase()}
                        onMouseOver={() => handleMouseOver(skill)}
                        onFocus={() => { }}
                        onMouseLeave={handleMouseLeave}
                        draggable="false"
                     />
                  </div>
               ))}
            </div>
         </section>
         <Wave startColor={theme} endColor="#111826" />
      </div>
   );
};

export default Skills;