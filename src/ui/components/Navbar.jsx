import React from 'react'
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const onLogout = () => {
        logout();   
        navigate('/login', {
            replace: true,
        })
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to="/">Marvel</NavLink>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to="/dc">Dc</NavLink>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to='/search' >Search</NavLink>
                </div>
                <div className="collapse navbar-collapse justify-content-end">
                    <span className='nav-link nav-item text-primary'>{user.name}</span>
                    <button 
                            className='nav-link nav-item btn'
                            onClick={onLogout}
                            >Logout</button>
                </div>
            </div>
        </div>
        </nav>
    </>
  )
}
