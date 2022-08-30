import { NavLink as RRNavLink } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';

import * as routes from '../../routes';

import { useAuth } from '../../context/auth.context';

const UserContextNavigation = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {!!currentUser
        ? (
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              className="text-black"
              caret
              nav
            >
              {currentUser.username}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Loguit
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )
        : (
          <>
            <NavItem>
              <NavLink className="text-white" tag={RRNavLink} to={routes.AUTH_SIGN_IN}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" tag={RRNavLink} to={routes.AUTH_SIGN_UP}>Sign Up</NavLink>
            </NavItem>
          </>
        )
      } 
    </>
  )
};

export default UserContextNavigation;
