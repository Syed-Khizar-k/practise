import Button from "./button";
const About = () => {
  return (
    <section
      className="min-h-screen pt-[90px] md:pt-[2vw] flex justify-center items-center flex-wrap md:flex-nowrap"
      id="about">
      <div className="md:w-[50%]">
        <h1 className="text-[48px] font-[900] capitalize leading-[45px]">
          About Hallowen Night
        </h1>
        <p className="py-[20px]">
          {" "}
          Night of all the saints, or all the dead is celebrated on October 31
          and it is a very funny international celebration , this celebration
          comes from ancient origins and is celebrated by everyone{" "}
        </p>
        <Button text="View more" />
      </div>
      <div className="md:w-[50%]  ">
        <img
          src="/about-img.png"
          alt=""
          className="md:h-[600px] h-[300px] md:px-[40px]"
        />
      </div>
    </section>
  );
};
export default About;
