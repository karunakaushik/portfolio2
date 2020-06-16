import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '../mohnish/nav.css'
import { Navbar, NavbarToggler,Nav,  NavbarBrand, Collapse, NavItem , NavLink} from 'reactstrap'
// import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return(
      <div className="navContainer">
        <Navbar className="navbar-inverse" toggleable>
          <NavbarToggler class="navbar-toggler" left onClick={this.toggle} />
            < NavbarBrand> 
                Karuna 
            </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink>
                    home
                  </NavLink>
                  <NavLink>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
          </Collapse>

        </Navbar>
        {/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/js/mdb.min.js"></script> */}
      </div>
    )
  }
}