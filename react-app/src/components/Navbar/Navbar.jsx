// TO DO: Insert logo
// TO DO: Change closing menu symbol (MdOutlineRestaurantMenu)

import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* LOGO AQUI */}
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Início</a></li>
        <li className='p__opensans'><a href="#notifications">Notificações</a></li>
        <li className='p__opensans'><a href="#projects">Projetos</a></li>
        <li className='p__opensans'><a href="#rooms">Salas</a></li>
        <li className='p__opensans'><a href="#settings">Configurações</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Entrar / Cadastrar</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <FaBars color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            < MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Início</a></li>
              <li className='p__opensans'><a href="#notifications">Notificações</a></li>
              <li className='p__opensans'><a href="#projects">Projetos</a></li>
              <li className='p__opensans'><a href="#rooms">Salas</a></li>
              <li className='p__opensans'><a href="#settings">Configurações</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
