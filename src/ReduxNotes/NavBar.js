import React from 'react';
import { useSelector } from 'react-redux'
import { FaShopify } from 'react-icons/fa'



const NavBar = () => {
const amount=useSelector((state)=>state)
console.log(amount);

  return (
    <>
      <div className="nav">
       <div className="logo">
        <h3>Redux Toolkit</h3>
       </div>
       <div className="icons">

       <FaShopify className='icon'/>
          <span className='num'>5</span>
       </div>
      </div>
    </>
  )
}

export default NavBar
