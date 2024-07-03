export default function Navbar() {
  return (
    <div className="w-full mx-auto border-b-2">
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-xl text-base">Portfolio.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-base">
            <li>
              <a href="#about">About</a>
              <hr />
            </li>
            <li>
              <a href="#skill">Skills</a>
              <hr />
            </li>
            <li>
              <a href="#contact">Contact</a>
              <hr />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="px-2 py-2 text-base font-semibold border border-violet-400 rounded dark:bg-violet-600 dark:text-gray-50"
            href="CV.txt"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
