import elemdata from "@/data/elemdata.json";
import Button from "./button";
const About = () => {
  const data = elemdata.about;
  return (
    <section
      className="min-h-screen pt-[90px] md:pt-[2vw] flex justify-center items-center flex-wrap md:flex-nowrap"
      id="about">
      <div className="md:w-[50%]">
        <h1 className="text-[48px] font-[900] capitalize leading-[45px]">
          {data.h1}
        </h1>
        <p className="py-[20px]">
        {data.p}
        </p>
        <Button text={data.btn} />
      </div>
      <div className="md:w-[50%]  ">
        <img
          src={data.img}
          alt=""
          className="md:h-[600px] h-[300px] md:px-[40px]"
        />
      </div>
    </section>
  );
};
export default About;
