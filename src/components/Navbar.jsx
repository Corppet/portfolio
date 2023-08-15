import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav 
      className={
      `${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20
      bg-primary`
      }
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        {/* Logo */}
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain " />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ivan &nbsp; 
            <span className="sm:block hidden">Ho</span>
          </p>
        </Link>

        {/* Navbar Links */}
        <ul className="list-none hidden items-center sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a href="../src/assets/resume.pdf" target="_blank">
              <button className="inline-flex items-center rounded-md 
              bg-[#00ffff] px-3 py-2 font-semibold shadow-sm hover:bg-[#066c6c] 
              text-primary text-[16px] font-medium cursor-pointer transition-all duration-300">
                <svg className="fill-current w-4 h-4 mr-2" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Resume
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Navbar Links */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${ !toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 
            right-0 mx-4 my-2 min-w[140] z-10 rounded-xl overflow-hidden}`}>
            <ul className="list-none flex justify-end item-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    }
                    font-poppins font-medium cursor-pointer text-[16px]`
                  }
                  onClick={() => { 
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a href="../src/assets/resume.pdf" target="_blank">
                  <button className="inline-flex items-center rounded-md 
              bg-[#00ffff] px-3 py-2 font-semibold shadow-sm hover:bg-[#066c6c] 
              text-primary text-[16px] font-medium cursor-pointer transition-all duration-300">
                    <svg className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
