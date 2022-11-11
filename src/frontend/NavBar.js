import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";


function NavBar(logout) {
  const user = useContext(CurrentUserContext)
 
    
  
  return (
    <div>
      {/* <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
         Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile"> Profile</NavLink>
          </NavItem>
  

          <NavItem>
            <NavLink to="/signup"> Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login"> Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar> */}
      {!user.user ? <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
         Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/signup"> Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login"> Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar> :  
      <Navbar expand="md"><NavLink exact to="/" className="navbar-brand">
         Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile"> Profile</NavLink>
          </NavItem>  
          <NavItem onClick={logout}> 
            <NavLink to="/"> Log out of {user.user.username} 
            </NavLink>
          </NavItem> 
          </Nav>
          </Navbar>
}

    </div>
  );
}

export default NavBar;


// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="/">
//               Jobly <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/companies">
//               Companies
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Pricing
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownMenuLink"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown link
//             </a>
//             <div
//               className="dropdown-menu"
//               aria-labelledby="navbarDropdownMenuLink"
//             >
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
