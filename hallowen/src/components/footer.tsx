import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="min-h-[50vh] pt-[70px]" id="footer">
      <div className="flex justify-between">
        <div className="hidden md:block">
          <a className="flex items-center font-[900] gap-2 " href="/">
            <img src="/favicon.png" alt="Logo" />
            <span className="md:text-[20px] text-[16px]">Halloween</span>
          </a>
          <p className="py-[10px] text-[12px] md:text-[18px]">
            Enjoy the scariest night of your life
          </p>
          <div className="flex md:gap-4 gap-2 py-[10px]">
            <FontAwesomeIcon
              icon={faFacebook}
              className="md:h-[34px] md:p-[7px] h-[24px] p-[3px] bg-gray-800/5 backdrop-blur-lg rounded-lg"></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faInstagram}
              className="md:h-[34px] md:p-[7px] h-[24px] p-[3px] bg-gray-800/5 backdrop-blur-lg rounded-lg"></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTwitter}
              className="md:h-[34px] md:p-[7px] h-[24px] p-[3px] bg-gray-800/5 backdrop-blur-lg rounded-lg"></FontAwesomeIcon>
          </div>
        </div>

        <div className="about">
          <h1 className="text-[20px] md:text-[24px] font-[900]">About</h1>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#header">Features</a>
            </li>
            <li>
              <a href="#newarrival">News</a>
            </li>
          </ul>
        </div>

        <div className="services">
          <h1 className="text-[20px] md:text-[24px] font-[900]">
            Our Services
          </h1>
          <ul>
            <li>
              <a href="#candy">Pricing</a>
            </li>
            <li>
              <a href="#discount">Discounts</a>
            </li>
            <li>
              <a href="#">Shipping mode</a>
            </li>
          </ul>
        </div>

        <div className="company ">
          <h1 className="text-[20px] md:text-[24px] font-[900]">Our Company</h1>
          <ul>
            <li>
              <a href="#category">Blog</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#header">Our mission</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pt-[60px]">
        © CandyToffee. Developed by Syed Khizar
      </p>
    </footer>
  );
};
export default Footer;
