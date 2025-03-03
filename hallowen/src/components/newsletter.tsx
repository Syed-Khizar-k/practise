import Button from "./button";
import elemdata from "@/data/elemdata.json";
const NewsLetter = () => {
  const data = elemdata.newsletter;
  return (
    <section className="newsLetter min-h-[50vh] " id="newsletter">
      <h1 className="md:text-[48px] text-[36px] font-[900] text-center pt-[30px] md:pt-[0] mt-[100px] md:mt-[0]">
        {data.h1}
      </h1>
      <p className="text-center md:text-[24px] text-[18px] py-[20px]">
        {data.p}
      </p>

      <div className="flex justify-center ">
        <div
          className="bg-gray-800/5 backdrop-blur-lg flex justify-between
       md:w-[500px] w-full p-[20px] rounded-xl">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-transparent outline-none placeholder-white"
          />
          <Button text={data.btn}></Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
