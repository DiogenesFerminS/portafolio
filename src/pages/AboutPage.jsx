import { FiMail } from "react-icons/fi";
import foto from "../assets/diogenes.png"
import { FaCss3Alt, FaGitAlt, FaHtml5, FaInstagram, FaJs, FaLinkedinIn, FaReact } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import cv from '../assets/CV.pdf';
import { useState } from "react";
import { SiJest } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

export const AboutPage = () => {

  const [techs, setTechs] = useState([
    {
      icon: <FaReact className="react__icon" size={40}/>, 
      name: "React",
      id:"1",
    },
    {
      icon: <FaJs className="js__icon" size={40}/>,
      name:"JavaScript",
      id:"2",

    },
    {
      icon: <TbBrandTypescript className="type__icon" size={40} />,
      name:"TypeScript",
      id:"3",
    },
    {
      icon: <FaHtml5 className="html__icon" size={40}/>,
      name:"HTML",
      id:"4",
    },
    {
      icon: <FaCss3Alt className="css__icon" size={40}/>,
      name:"CSS",
      id:"5",
    },
    {
      icon: <FaGitAlt className="git__icon" size={40}/>,
      name:"Git",
      id:"6",
    },
    {
      icon: <SiJest className="jest__icon" size={40}/>,
      name: "Jest",
      id:"7",

    },
    ,
    {
      icon: <RiNextjsLine className="next__icon" size={40}/>,
      name: "Next",
      id:"8",

    },
    {
      icon: <RiTailwindCssFill className="next__icon" size={40}/>,
      name: "Tailwind",
      id:"9",

    },
  ]);

  const handleDownload = ()=>{
    window.open(cv, "_blank")
  }

  return (
  <main className="about__container">

      {/* Container profile */}

      <div className="profile__container">
            {/* container img */}

            <div className="about__profile">

              <div className="about__img-container">
                  <img src={foto} alt="" className="about__img"/>
              </div>

            </div>

            {/* Container info */}

            <div className="about__info">
              <div className="about__text-container">
                  <p>19-year-old self-taught front-end developer specializing in React and JavaScript. I'm a university student majoring in Computer Science and have 1.5 years of experience working on personal projects. I'm looking for my first job opportunity to contribute creativity and efficient code. Continuous learning and a passion for detail!</p>

                <div className="about__enlaces">
                    <div className="enlace__mail">
                        <a href="mailto:paolofersantella@gmail.com" className="email__btn"><FiMail size={30} className="email__icon"/></a>
                    </div>
                    <div className="enlace__linke">
                        <a href="https://www.linkedin.com/in/diogenes-fermin-a97a44329" className="linke__btn" target="_blank"><FaLinkedinIn size={30} className="linke__icon"/></a>
                    </div>
                    <div className="enlace__ig">
                        <a href="https://www.instagram.com/diogenes_fs/" className="ig__btn" target="_blank"><FaInstagram size={30} className="ig__icon"/></a>
                    </div>
                    <div className="enlace__dcv">
                      <button
                        onClick={handleDownload}
                        className="btn__cv"
                      ><span className="text__cv">Download CV</span><IoMdDownload size={30} className="icon__cv"/></button>
                    </div>
                </div>
              </div>
              
            </div>
      </div>

      {/* Container skills */}
      <div className="tech__container">
        {
            techs.map(tech =>(
              <div key={tech.name} className="tech__item">
                
                <div className="tech__icon">{tech.icon}</div>  
                
                <span className="tech__name">{tech.name}</span>

              </div>
            ))
          }
      </div>

  </main>  
    
  )
};