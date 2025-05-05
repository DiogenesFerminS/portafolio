import { useState } from "react"
import { FaReact, FaVuejs } from "react-icons/fa";
import todoImg from '../assets/proyectImg/todoApp.webp';
import gifImg from '../assets/proyectImg/gifApp.webp';
import reactImg from '../assets/proyectImg/reactC.webp';
import pacientesIMG from '../assets/proyectImg/pacientesAppType.webp';
import { TbBrandTypescript } from "react-icons/tb";
import cotizadorImg from '../assets/proyectImg/cotizador.webp';
import crmImg from '../assets/proyectImg/crm.webp';
import { IoLogoJavascript } from "react-icons/io";
import cotizadorC from '../assets/proyectImg/cotizadorCriptos.webp';
import buscadorImgs from '../assets/proyectImg/buscadorIMGs.webp';
import recetasImg from '../assets/proyectImg/recetas.webp';
import climaImg from '../assets/proyectImg/clima.webp';
import jsImg from '../assets/proyectImg/jsC.webp';
import heroImg from '../assets/proyectImg/heroappImg.webp';
import rickImg from '../assets/proyectImg/appRickAndMorty.webp';
import { RiNextjsLine } from "react-icons/ri";

export const ProjectPage = () => {

  const [projects, setProjects] = useState([
    {
      img:rickImg,
      title: 'Rick and Morty App',
      description: 'This application allows you to view the Rick and Morty characters, filter them by different characteristics, and add them to favorites. It uses react hooks such as useContext, useEffect, and useState. This was my first app with Next JS.',
      techI: <RiNextjsLine size={45} className={`card__icon`} />,
      category:"proyect",
      url:"https://github.com/DiogenesFerminS/rick-and-morty-app",
    },
    {
      img:heroImg ,
      title: 'Heroes App',
      description: 'This application allows you to search for various heroes from DC Comics and Marvel Comics. With this project, I increased my knowledge of React Router DOM, private routes and public routes, in addition to useContext and useReducer.',
      techI: <FaReact size={45} className={`card__icon`} />,
      category:"proyect",
      url:"https://heroes-fermin.netlify.app",
    },
    {
      img: todoImg,
      title: 'TODO app',
      description: 'It is an application to organize and remember pending tasks, this application helped me improve the use of the useReducer hook in react in addition to useState and useEffect',
      techI: <FaReact size={45} className={`card__icon`} />,
      category:"proyect",
      url:"https://todos-fermin.netlify.app/",
    },
    {
      img: gifImg,
      title: 'Gif app',
      description: 'It is an application that allows you to search for any gif and download it. It uses the GIPHY API. It helped me understand basic gifs such as useEffect and useState.',
      techI: <FaReact size={45} className={`card__icon`} />,
      category:"proyect",
      url:"https://gif-app-fermin.netlify.app/",
    },
    {
      img: reactImg,
      title: 'react course certificate',
      description: '',
      techI: '',
      category:"certificate",
      url:"https://drive.google.com/file/d/1cN6hFH51etyVU1bEVSr47CHBHxMyCMAH/view?usp=sharing",
    },
    {
      img: pacientesIMG,
      title: 'patient administrator',
      description: 'It is an application that allows you to manage veterinary patients in a complete CRUD and it is a project made in JS that I converted to TypeScript to practice, the styles are designed with tailwind.',
      techI: <TbBrandTypescript size={45} className="card__icon"/>,
      category:"proyect",
      url:"https://typescriptadminfermin.netlify.app/",
    },
    {
      img: cotizadorImg,
      title: 'Loan Quoter (VUE)',
      description: 'This application allows you to quote loans depending on the amount and payment term. It is built with VUE and was my experience with this framework.',
      techI: <FaVuejs size={45} className="card__icon"/>,
      category:"proyect",
      url:"https://cotizador-vue-fermin.netlify.app/",
    },
    {
      img: cotizadorImg,
      title: 'Loan Quoter (REACT)',
      description: "This application allows you to quote loans depending on the amount and payment time. This was my first application with React. It helped me understand React's first hook, UseState.",
      techI: <FaReact size={45} className="card__icon"/>,
      category:"proyect",
      url:"https://cotizador-fermin.netlify.app/",
    },
    {
      img: crmImg,
      title: 'customer manager',
      description: "This application allows you to manage your clients. It is a complete CRUD, it is built with JavaScript and uses IndexedDB web storage.",
      techI: <IoLogoJavascript size={45} className="card__icon"/>,
      category:"proyect",
      url:"https://crmdiogenesfermin.netlify.app/",
    },
    {
      img: jsImg,
      title: 'JavaScript course certificate',
      description: '',
      techI: '',
      category:"certificate",
      url:"https://drive.google.com/file/d/1-xTRcSkmG6vqfRYCg1-zEmUUe04LCe8k/view?usp=sharing",
    },
    {
      img: cotizadorC,
      title: 'crypto quote',
      description: "This application allows you to quote different cryptocurrencies in different currencies. This project is built in JavaScript.",
      techI: <IoLogoJavascript size={45} className="card__icon"/>,
      category:"proyect",
      url:"https://criptofermin.netlify.app/",
    },
    {
      img: buscadorImgs,
      title: 'image search engine',
      description: "This application allows you to search for images, uses the PIXABAY API and is built with JavaScript. the styles are designed with tailwind.",
      techI: <IoLogoJavascript size={45} className="card__icon"/>,
      category:"proyect",
      url:"https://bancoimagenesfermin.netlify.app/",
    },
    {
      img: recetasImg,
      title: 'Recipe finder',
      description: "This application allows you to search for different types of recipes organized by categories. It is built with JavaScript and Bootstrap.",
      techI: <IoLogoJavascript size={45} className="card__icon"/> ,
      category:"proyect",
      url:"https://ferminrecetas.netlify.app/",
    },
    {
      img: climaImg,
      title: 'climate app',
      description: "This application allows you to see the weather in different cities. It is built with JavaScript and Tailwind.",
      techI: <IoLogoJavascript size={45} className="card__icon"/> ,
      category:"proyect",
      url:"https://climafermin.netlify.app/",
    }
  ])


  return (
    <section className="projects__grid">
        {
          projects.map(project=>(
            <div className="card" key={project.title}>
              <div className="card__img-container">
                  <img src={`${project.img}`} alt={project.title} />
              </div>
              <div className="card__info-container">
                  <span className="card__title">{project.title}</span>
                  <p>{project.description}</p>
              </div>
              <div>
                  {project.techI}
              </div>
              <div className="card__btn-container">
                  <a
                    href={project.url}
                    target="_blank"
                     rel="noopener noreferrer"
                  className="card__btn"
                  >{`see the ${project.category}`}</a>
              </div>
            </div>
          ))
        }
    </section>
  )
}
