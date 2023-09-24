import { useEffect, useState } from "react"
import IconMoon from "./Icons/IconMoon"
import IconSun from "./Icons/IconSun"

const inicialDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

  const [darkMode,setDarkMode] = useState(inicialDarkMode)

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark');
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
  },[darkMode])

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
        <div className="flex justify-between py-6">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3rem]">todo</h1>
        <button onClick={()=> setDarkMode(!darkMode)}>
          {
            darkMode ? <IconSun/> : <IconMoon/>
          }
          </button>
        </div>
    </header>
  )
}

export default Header