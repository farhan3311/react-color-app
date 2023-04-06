import { Link, NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <header className="navbar-wrapper">
      <Link to="/colours">
        <h2>Colors app</h2>
      </Link>
      <nav className="nav-bar">
        <Link to="/colours">Color Page</Link>
        <Link to="/colours/new">Add New Colour</Link>
      </nav>
    </header>
  );
}

export default Nav;
