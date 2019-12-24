import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Projects</h1>
        <strong>select a project</strong>
        <ul>
          <li>
            <NavLink activeStyle={{color:'brown'}} to="/projects/1">Project 1 </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color:'brown'}} to="/projects/2">Project 2 </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color:'brown'}} to="/projects/3">Project 3 </NavLink>
          </li>
        </ul>
        <Footer />
      </div>
    )
  }
}