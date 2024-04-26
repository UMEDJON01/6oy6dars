import { Link } from "react-router-dom";

import NawLinks from "./NawLinks";

function Navbar() {
  return (
    <div className="bg-base-300  py-6  mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary  hidden  lg:flex">
            MyMarket
          </Link>
          <div className="dropdown btn-secondary lg:hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              MyMarket
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NawLinks />
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center  hidden  lg:flex">
          <NawLinks />
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary"> Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
