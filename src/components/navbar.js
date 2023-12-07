import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5"; 
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link href="/">Home</Link>
              </li>
              <li>
              <Link href="./Products">Product</Link>
              </li>
              <li>
              <Link href="/teams">Teams</Link>
              </li>
              <li>
              <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image
              src="/logovivo.png"
              alt="Company Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
          <IoSearchOutline />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaRegUser />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
