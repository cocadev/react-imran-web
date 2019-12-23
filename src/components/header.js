import React from 'react'
import { images } from '../utils/images';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div>
                <ul style={navBar}>
                    <li className='display-inline'>
                        <NavLink exact style={navStyle} activeStyle={{ color: 'red' }} to="/">HOME</NavLink>
                    </li>
                    <li className='display-inline'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/about">ABOUT</NavLink>
                    </li>
                    <li className='display-inline'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/services">SERVICES</NavLink>
                    </li>
                    <li className='display-inline'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/projects">PROJECTS</NavLink>
                    </li>
                    <li className='display-inline'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/account">MY ACCOUNT</NavLink>
                    </li>
                    <li className='display-inline'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/contact">CONTACT</NavLink>
                    </li>
                    <li className='display-inline'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/brief">SEND YOUR BRIEF</NavLink>
                    </li>
                    <li className='display-inline pb-5'>
                        <NavLink style={navStyle} activeStyle={{ color: 'red' }} to="/signin">SIGN IN</NavLink>
                    </li>
                </ul>

                <div style={blackBar}>
                    <img src={images.logo} />
                </div>
            </div>
        )
    }
}

const navStyle = {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    padding: 22,
    textDecoration: 'none',
    fontFamily: 'sans-serif'
};

const navBar = {
    padding: 5,
    backgroundColor: '#23bdc3',
    textAlign: 'center',
    paddingBottom: 0
}

const blackBar = {
    backgroundColor: '#000',
    textAlign: 'center'
}

export default Header