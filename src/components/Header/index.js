import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './nav.css'
import NavIcon from './menu.svg'
import { Navbar, NavbarToggler,Nav,  NavbarBrand, Collapse, NavItem , NavLink} from 'reactstrap'
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
  scrollToacademic = () => {
    const height = window.innerHeight
    const push = (2)*height
    window.scroll({top: push, behavior: 'smooth'})
}
scrollToabout = () => {
  const height = window.innerHeight
  const push = (1)*height
  window.scroll({top: push, behavior: 'smooth'})
}
  scrollToskill = () => {
    const height = window.innerHeight
    const push = (3)*height
    window.scroll({top: push, behavior: 'smooth'})
}
  scrollTocontact = () => {
    const height = window.innerHeight
    const push = (4)*height
    window.scroll({top: push, behavior: 'smooth'})
}
  render() {
    return(
      <div className="navContainer">
        <Navbar className="navbar-inverse" toggleable>
          <NavbarToggler class="navbar-toggler"  onClick={this.toggle} > <img src={NavIcon} alt="NavIcon" /> </NavbarToggler>
            < NavbarBrand> 
                Karuna 
            </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/">
                    home
                  </NavLink>
                  <NavLink onClick={this.scrollToabout}>
                    About
                  </NavLink>
                  <NavLink onClick={this.scrollToacademic}>
                  Academic
                  </NavLink>
                  <NavLink onClick={this.scrollToskill}>
                  Skills
                  </NavLink>
                  <NavLink onClick={this.scrollTocontact}>
                  Contacts
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