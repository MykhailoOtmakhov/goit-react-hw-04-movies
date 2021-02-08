import React from 'react'
import {NavLink} from 'react-router-dom';
import routes from '../../routes'

const AppBar = () => {
    return (
        <header>
            <ul>
              <li>
                <NavLink 
                  exact
                  to ={routes.homepage}
                  className="NavLink"
                  activeClassName="NavLink--active"
                >
                  Home
                </NavLink>
              </li>  
              <li>
                <NavLink 
                  to ={routes.moviesPage}
                  className="NavLink"
                  activeClassName="NavLink--active"
                >
                  Movie
                </NavLink>
              </li> 
            </ul>
        </header>
    )
}

export default AppBar
