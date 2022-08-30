import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

// Custom components
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <Navbar
        className="bg-white"
        color="white"
        expand="md"
        light
      >
        <NavbarBrand className="text-black" tag={RRNavLink} to="/home">
          PGM Platform
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <navbar>
          <Navigation/>
        </navbar>
      </Navbar>
    </header>
  );
};

export default Header;