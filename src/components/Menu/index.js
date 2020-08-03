import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from "../ButtonLink";

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='Neneflix Logo' />
      </Link>
      {/* Trocando a tag styled.a por styled.button no component Button, refencio ele com as="a" para se comportar como a tag a*/}
      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
