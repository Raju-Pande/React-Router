import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <h4>Home</h4>
        </Link>

        <Link to="/about">
          <h4>About</h4>
        </Link>

        <Link to="/items">
          <h4>Items</h4>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
