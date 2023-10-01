import React from 'react'
import { useNavigate } from "react-router-dom";


const loginLayoutMain = {
    
        display: "flex",
        height: "100vh",
        minHeight:" 100vh",
        // maxWidth:" 1028px",
        margin:" 0 auto",
        width:" 100%",
        alignItems:" center",
        flexDirection:" column",
        
        justifyContent:" center",
        gap:"20px",
      
}
function LoginLayout() {
    const navigate = useNavigate();
  return (
    <div style={loginLayoutMain} className=' bg-primary '>
      
      <img src='/DGHlogo.png' alt='logo' style={{width:"200px", height:"auto"}} />

      <p className="pageDescription text-[white]  ">Volunteer Access</p>

      <button
            
            className="flex w-[10rem] max-w-full bg-[white] text-borderColor  p-2 flex-col items-center justify-center border-2 border-borderColor rounded-md m-2 text-center hover:bg-primary/20 hover:text-white hover:bg-secondary hover:border-secondary/20 hover:border-opacity-100
            sm:w-[20rem] sm:max-w-full md:w-[30rem] md:max-w-full lg:w-[40rem] lg:max-w-full 
            "
            onClick={()=> navigate('/volunteerhome')}
          >
            Enter Volunteer PIN
          </button>

            <p className="pageDescription text-[white] absolute bottom-6 cursor-pointer hover:text-[black]" onClick={()=> navigate('/volunteerhome')} >Admin Access</p>
    </div>
  )
}

export default LoginLayout
