import { IoSearchOutline } from "react-icons/io5";
import { navLinks } from "../../constants";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="h-[80px] flex w-full items-center">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-[40px]">
          <a href="#">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="32"
              viewBox="0 0 120 32"
              data-di-rand="1722772111610"
              role="presentation"
              aria-hidden="true"
              tabIndex={-1}
            >
              <rect id="Clear_space" width="120" height="32" fill="none"></rect>
              <path
                id="Logo_ratio"
                d="M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z"
                transform="translate(8 8)"
              ></path>
            </svg>
          </a>
          <ul className="2xl:flex hidden gap-0.5">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-medium px-2 py-1 rounded-2xl hover:text-white hover:bg-black text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-[25px]">
          <ul className="sm:flex hidden gap-0.5">
            <li>
              <a
                href="#"
                className="font-medium px-2 py-1 rounded-2xl hover:text-white hover:bg-black text-sm"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium px-2 py-1 rounded-2xl hover:text-white hover:bg-black text-sm"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium px-2 py-1 rounded-2xl hover:text-white hover:bg-black text-sm"
              >
                For Business
              </a>
            </li>
          </ul>
          <div className="flex gap-0.5 items-center">
            <button
              type="button"
              title="Search"
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <IoSearchOutline size={24} />
            </button>
            <button
              type="button"
              title="Search"
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <MdOutlineShoppingCart size={24} />
            </button>
            <button
              type="button"
              title="Search"
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <RiAccountCircleLine size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
