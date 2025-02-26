import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
const Header = () => {
  return (
    <section className="w-full flex-wrap md:flex-nowrap flex py-[50px] items-center justify-center">
      <div className="md:w-[50%] w-full">
        <img src="/home2-img.png" alt="" className="w-full " />
        <div className="flex gap-2 items-center px-[20px]">
          <div className="text-right">
            {" "}
            <h1 className="text-[18px] font-[900]">Adino & Grahami </h1>
            <p className="text-[14px]">No words can describe them</p>
          </div>
          <div className="after:block after:h-[60px] after:w-[1px] after:bg-white after:mt-0  before:block before:bg-white before:h-[7px] before:w-[7px] before:rounded-3xl before:ml-[-3px] "></div>
        </div>
      </div>
      <div className="md:w-[50%] w-full md:pl-[30px] mt-[100px] md:mt-0">
        <div>
          <h1 className="text-[22px] font-[900] uppercase">#2 top best duo</h1>
          <h1 className="text-[68px] font-[900] uppercase md:leading-[60px] leading-[70px] py-[20px]">
            Bring back my cotton candy
          </h1>
          <p>
            Adino steals cotton candy from his brother and eats them all in one
            bite , a hungry beast . grahami can no longer contain his anger
            towards Andino
          </p>
        </div>
        <div className="flex justify-between items-center pt-[40px]">
          <Button text="Book now" />
          <a className="flex items-center gap-2" href="/">
            <span>Track Record</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-[18px]"></FontAwesomeIcon>{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Header;
