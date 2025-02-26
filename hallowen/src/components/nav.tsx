import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-[10px] ">
      <a className="flex items-center font-[900] gap-2" href="/">
        <img src="/favicon.png" alt="Logo" />
        <span>Halloween</span>
      </a>
      <div className="">
        <ul className="hidden  md:flex justify-center items-center gap-8 font-medium">
          <li className="">
            <a
              href="/"
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Candy
            </a>
          </li>
          <li>
            <a
              href=""
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              New
            </a>
          </li>
          <li className="py-[6px] px-[15px] border border-white rounded-3xl">
            <a href="">Support</a>
          </li>
        </ul>
        <div className="  text-white md:hidden ">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="h-[22px]"></FontAwesomeIcon>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
