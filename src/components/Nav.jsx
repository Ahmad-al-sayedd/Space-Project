
import { NavLink,Outlet } from 'react-router-dom'
import { BsRocket } from "react-icons/bs";

const Nav = () => {
  return (
    <>
       <nav>
        <i className='rocket'><BsRocket style={{fontSize:'50px', color:'white'}} /></i>
  
   <ul>
    <li>
        <NavLink to='/'> Vr-Glasses</NavLink>
    </li>
    <li>
        <NavLink to='/launches'>Launches</NavLink>
    </li>
   </ul>
   </nav>
    
    <Outlet />
    </>

  )
}

export default Nav
