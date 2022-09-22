import React, { useState } from 'react'
import school from '../../assets/images/school.png'
import user from '../../assets/images/user.png'
import { StyledNavbar } from './NavbarStyled'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../../components/loading/Loading'

import open from '../../assets/icons/open.svg'
import close from '../../assets/icons/close.svg'

export default function Navbar() {
  const locaton = useLocation()

  const [menu, setMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setMenu((p) => !p);
  }

  function PageOpen() {
    setMenu(false)
    setIsMenuOpen(true)

  }
      // if(isMenuOpen) return <Loading/>

  return (
    <StyledNavbar>
      <div className="container">
        <main>
          <section className='section-one'>
            <div className='left'>
              
                <img src={school} alt="" />
                <span>School</span>
              
            </div>
          </section>
          <section className={'section-two' + (menu ? ' active' : "")}>
            <div className="right">
              <ul>
                <li>
                  <Link to="news"
                    className={locaton.pathname === 'news' ? 'active' : ''}
                    onClick={PageOpen}
                  >
                    Yangiliklar
                  </Link>
                </li>
                <li><Link to="maktablar" className={locaton.pathname === 'maktablar' ? 'active' : ''}>
                  Maktablar
                </Link>
                </li>
                <li><Link to="olimpiadalar" className={locaton.pathname === 'olimpiadalar' ? 'active' : ''}>
                  Olimpiadalar
                </Link>
                </li>
                <li><Link to="kutubxonalar" className={locaton.pathname === 'kutubxonalar' ? 'active' : ''}>
                  Kutubxona
                </Link>
                </li>
                <li>
                  <Link to="tests" className={locaton.pathname === 'tests' ? 'active' : ''}
                    onClick={PageOpen}
                  >
                    Testlar
                  </Link>
                </li>
                <li><Link to="/imtihon">Imtihon</Link></li>
                <li><Link to="/hujjatlar">Hujjatlar</Link></li>
              </ul>
            </div>

            <div className='user'>
              <select>
                <option value="Uz">Uz</option>
                <option value="Ru">Ru</option>
                <option value="Eng">Eng</option>
              </select>
              <div>
                <img src={user} alt="" />
              </div>
            </div>

          </section>
          <section className='open_menu'>
            <img src={menu ? close : open} alt="open" onClick={toggleMenu} />
          </section>
          {/* <i className='icon icon-open'></i> */}
        </main>

      </div >
    </StyledNavbar >
  )
}
