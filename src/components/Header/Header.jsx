import React, { useContext, useEffect, useRef } from 'react'
// import logo from '../../assets/images/logo.png'
import logo from '../../assets/react.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BiMenu } from "react-icons/bi"
// import { authContext } from '../../context/AuthContex'
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'


const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/sidbar',
    display: 'learn-sidbar'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },

]

function Header() {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
//   const { user, role, token } = useContext(authContext)
  const { user, role, token } = {}
//   const { dispatch } = useContext(authContext)
  const navigate=useNavigate()

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  const handleLogout = () => {
    // dispatch({ type: "LOGOUT" });
    localStorage.removeItem('token');
    navigate('/login')
    // window.location.href = '/login';
}

  return (
    <header className='header flex items-center pt-2' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* --------- log ------- */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* ------- menu ------------ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => <li key={index}>
                  <NavLink to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >{link.display}</NavLink>
                </li>)
              }
            </ul>
          </div>

          {/* ----------- nav right ----------  */}
          <div className="flex items-center gap-4 ">

            {
              token && user ?
                (<div >
                  {/* <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}> */}
                  <Menu as='div' className='border-none' >
                  <MenuButton>
                    {user.photo ? (<>
                      <figure className='w-[35px] h-[35px] rounded-full'>
                        <img src={user?.photo} alt="" />
                      </figure>


                    </>

                    ) : (
                      <h2>{user?.name}</h2>
                    )}

                  </MenuButton>
                  <MenuItems
                    anchor="bottom"
                    transition
                    className=" origin-top-right  flex flex-col transition
                         duration-200 ease-out border-none 
                         data-[closed]:scale-95 data-[closed]:opacity-0 backdrop-blur-xl
                          bg-white/30 p-1 right-0 w-48 z-10 mt-11  shadow-md ring-1 ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem className='block rounded-lg py-2 px-3 transition hover:bg-blue-500 
                         hover:text-white text-black hover:no-underline text-center'>
                      <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                        Your profile
                      </Link>

                    </MenuItem>

                    <MenuItem className='block rounded-lg py-2 px-3 transition hover:bg-red-500
                         hover:text-white text-black hover:no-underline'>
                      <button onClick={handleLogout}>
                        Logout
                      </button>
                    </MenuItem>
                  </MenuItems>
                  </Menu>
                  {/* </Link> */}
                </div>
                )
                :
                (<Link to={'/login'}>
                  <button
                    className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
              flex items-center justify-center rounded-[50px] border-none'
                  >
                    Login
                  </button>
                </Link>)
            }

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header