import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import "../../../pages/project/Project.css"
import { Link } from '../../action/link/Link'
const Project = ({ p }) => {
   return (
      <div className='p-container'>
         <div className='p-details'>
            <div className='p-link'>
               <h2>{p.name}</h2>
               <Link link={p.project_link} title={p.name} className={'plink'}>
                  <FiExternalLink />
               </Link>
            </div>
            <p>{p.desc}</p>
            <div className='tech'>
               <h3>Tech Stack :</h3>
               {p.tech.map((t, i) => (
                  <p key={i}>{t}</p>
               ))}
            </div>
            <div className='tech'>
               <Link link={p.github} title={p.github} className={'glink'}><AiFillGithub id={'github'} /></Link>
            </div>

         </div>

      </div>
   )
}

export default Project