import React, {useEffect} from 'react'
import LeftNavbar from '../../component/navbar/leftnavbar/LeftNavbar'
import '../../App.css'
import Project from '../../component/bars/project/Projects'

const Projects = () => {
  const project = [{
    id: 1,
    name: "News Site",
    tech: [
      "CSS3",
      "Reactjs",
      "REST API",
      "Material-UI",
      "Node JS",
      "Express JS"
    ],
    status: "Completed",
    github: "https://github.com/Kalyan-velu/news-web-app-react",
    img_url: "https://res.cloudinary.com/dvo5ejdna/image/upload/v1674743195/Screenshot_38_octi6h.png",
    project_link: "https://news-search-easy.netlify.app/",
    desc: "This project uses NewsApi to serve news articles from around the world (My first react project)."
  }, {
    id: 2,
    name: "Chat Application",
    tech: [
      "CSS3",
      "Reactjs",
      "REST API",
      "Material-UI",
      "Node JS",
      "MERN Stack",
      "MongoDb"
    ],
    status: "Completed",
    github: "https://github.com/Kalyan-velu/news-web-app-react",
    img_url: "",
    project_link: "https://chat-application-server.onrender.com",
    desc: "A simple website for chatting."
  }, {
    id: 3,
    name: "Expence-Tracker",
    tech: [
      "Reactjs",
      "Material-UI",
      "CSS3",
    ],
    status: "Completed",
    github: "https://github.com/Kalyan-velu/Expence-Tracker",
    img_url: "",
    project_link: "https://expense-tracker-r.netlify.app/",
    desc: "Just a simple expense tracker app for practicing react context."
  }, {
    id: 4,
    name: " Portfolio-HTML-CSS-JS",
    tech: [
      "HTML5",
      "CSS3",
      "JS"
    ],
    status: "Completed",
    github: "https://github.com/Kalyan-velu/Portfolio-HTML-CSS-JS",
    img_url: "",
    project_link: "https://kalyan-jyoti-borah.netlify.app/",
    desc: "Portfolio."
  }, {
    id: 5,
    name: "StackOverflow-clone",
    tech: [
      "CSS3",
      "Reactjs",
      "REST API",
      "Material-UI",
      "Node JS",
      "MERN Stack",
      "MongoDb"
    ],
    status: "Completed",
    github: "https://github.com/Kalyan-velu/StackOverflow-clone",
    img_url: "",
    project_link: "https://cstackoverflow-clone.netlify.app/",
    desc: "A StackOverflow clone website created using MERN stack."
  },
  {
    id: 6,
    name: "Image Search Using Pixabay",
    tech: [
      "CSS3",
      "Reactjs",
      "REST API",
      "Material-UI",
      "Node JS",
      "MERN Stack",
      "MongoDb",
      "Pixabay API"
    ],
    status: "Completed",
    github: "https://github.com/Kalyan-velu/Image_Search",
    img_url: "",
    project_link: "https://image-search-pix.netlify.app/",
    desc: "A image search website that uses pixabay api to fetch images ."
  }
  ]
  useEffect(()=>{
    document.title="Kalyan | Projects"
  },[])
  return (
    <div className="container-main">
      <LeftNavbar />
      <div className="container-details">
        <h2 style={{ textAlign: 'center' }}>Projects</h2>
        <div className='project-list'>
          {project.map((p) => (
            <Project key={p.id} p={p} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects