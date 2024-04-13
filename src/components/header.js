import { Link, Outlet } from "react-router-dom"
import icon from '../assets/images/logo512.png'
import SideBar from "./sideBar"


const HeaderComp = () => {

  return (
    <>
      <div class='flex justify-start items-center space-x-2 p-2 w=[100%] h-10 bg-slate-800'>
        <img src={icon} class='w-5'/>
        <p class='text-white'>REACT SAMPLE</p>
      </div>
      <div class='flex'>
        <SideBar />
        <div class='w-[100%]'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default HeaderComp