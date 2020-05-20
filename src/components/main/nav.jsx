import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header
`
  width: 100%;
  border-bottom: 4px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
       p {
      width: 500px;
      display: block;
    }
  
  }  
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  nav {
    a.active {
      color: #222;
      /* height: 80px; */
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
  
  }
  @media only screen and (max-width: 600px) {
    /* height: auto; */
    /* min-height: 50px; */
    display: block;
    position: relative;
  
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      overflow: hidden;
      max-height: 0;
      transition-duration: 0.4s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1); 

      &.is-expanded {
        overflow: hidden;
        max-height: 90vh;
        transition-duration: 0.4s;
        transition-timing-function: ease-in;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
        
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li>home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>about</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
