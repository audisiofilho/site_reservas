import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

import logo from '../../assets/logo.svg';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve)

 return (
   <header className="container">
       <Link to='/'>
            <img className="logo" src={logo} alt="logoprojeto" />
       </Link>

       <Link className="reserva" to="/reservas">
        <div>
            <strong>Minhas Reservas</strong>
            <span>{reserveSize.length} reservas</span>
        </div>
       </Link>
   </header>
 );
}