import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import elemdata from "@/data/elemdata.json";
const Footer = () => {
  const data = elemdata.footer;
  return (
    <footer className="min-h-[50vh] pt-[70px]" id="footer">
      <div className="flex justify-evenly">
        <div className="hidden md:block">
          <a className="flex items-center font-[900] gap-2 " href="/">
            <img src={data.img} alt="Logo" />
            <span className="md:text-[20px] text-[16px]">{data.logo}</span>
          </a>
          <p className="py-[10px] text-[12px] md:text-[18px]">{data.p}</p>
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
          <h1 className="text-[16px] md:text-[24px] font-[900]">
            {data.about.h1}
          </h1>
          <ul className="text-[14px] md:text-[18px]">
            <li>
              <a href="#about">{data.about.l1}</a>
            </li>
            <li>
              <a href="#header">{data.about.l2}</a>
            </li>
            <li>
              <a href="#newarrival">{data.about.l3}</a>
            </li>
          </ul>
        </div>

        <div className="services">
          <h1 className="text-[16px] md:text-[24px] font-[900]">
            {data.services.h1}
          </h1>
          <ul className="text-[14px] md:text-[18px]">
            <li>
              <a href="#candy">{data.services.l1}</a>
            </li>
            <li>
              <a href="#discount">{data.services.l2}</a>
            </li>
            <li>
              <a href="#">{data.services.l3}</a>
            </li>
          </ul>
        </div>

        <div className="company ">
          <h1 className="text-[16px] md:text-[24px] font-[900]">
            {data.company.h1}
          </h1>
          <ul className="text-[14px] md:text-[18px]">
            <li>
              <a href="#category">{data.company.l1}</a>
            </li>
            <li>
              <a href="#about">{data.company.l2}</a>
            </li>
            <li>
              <a href="#header">{data.company.l3}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center md:pt-[60px] pt-[70px]">{data.label}</p>
    </footer>
  );
};
export default Footer;
