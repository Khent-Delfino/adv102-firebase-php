import { useNavigate } from "react-router-dom";


const SideBar = () => {
  const navigate = useNavigate();

  const changeUrl = (url) => {
    navigate(url)
  }

  return (
    <div class='h-[100vh] w-[200px] bg-slate-800 p-2 space-y-2'>
      <button class='bg-slate-400 text-white w-[100%] p-2 hover:bg-sky-700'
        onClick = {() => changeUrl('/')}
      >
        Home
      </button>
      <button class='bg-slate-400 text-white w-[100%] p-2 hover:bg-sky-700'
        onClick = {() => changeUrl('/gallery')}
      >
        Gallery
      </button>
      <button class='bg-slate-400 text-white w-[100%] p-2 hover:bg-sky-700'
        onClick = {() => changeUrl('/profile')}
      >
        Profile
      </button>
    </div>
  )
}

export default SideBar;