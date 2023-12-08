import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btnbtn-ghost btn-circle w-32"
            >
              <img src="/logovivo.png" />
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
        <div className="gap-4 space-x-4 navbar-center">
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="./Products">Product</Link>
          </span>
          <span>
            <Link href="/teams">Teams</Link>
          </span>
          <span>
            <Link href="/about">About</Link>
          </span>
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
