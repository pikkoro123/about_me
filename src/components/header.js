import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
// import './App.css'
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false
    };
  }

  active() {
    this.setState({active: "active"})
    console.log(this.state.active)
  }
  render() {
    return (
      <div>
        <Navbar className="nav-header" expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Nav  className="mr-auto" navbar>
                <NavItem><NavLink><Link className="mr-auto1" className={this.state.active} to='/'><b>Home</b></Link></NavLink></NavItem>
                <NavItem><NavLink><Link className="mr-auto1" to='/about'><b>About</b></Link></NavLink></NavItem>
                <NavItem><NavLink><Link className="mr-auto1" to='/activity'><b>Activity</b></Link></NavLink></NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
