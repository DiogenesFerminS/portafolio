import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./pages/AboutPage"
import { ProjectPage } from "./pages/ProjectPage"
import { Navbar } from "./components/Navbar"
import { useEffect, useState } from "react"

export const PortfolioApp = () => {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(()=>{
    const body = document.body;
    if(darkMode){
      body.classList.add('dark');
      body.classList.remove('light');
    }else{
      body.classList.add('light');
      body.classList.remove('dark')
    }

  }, [darkMode])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<AboutPage/>}/>
        <Route path="projects" element={<ProjectPage/>}/>

        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>

    </>
      
  )
}
