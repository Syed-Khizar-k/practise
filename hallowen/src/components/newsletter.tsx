import Button from "./button";
const NewsLetter = () => {
  return (
    <section className="newsLetter min-h-[50vh] " id="newsletter">
      <h1 className="md:text-[48px] text-[36px] font-[900] text-center pt-[30px] md:pt-[0] mt-[100px] md:mt-[0]">
        Our Newsletter
      </h1>
      <p className="text-center md:text-[24px] text-[18px] py-[20px]">
        Promotion new products and sales Directly to your inbox
      </p>

      <div className="flex justify-center ">
        <div
          className="bg-gray-800/5 backdrop-blur-lg flex justify-between
       w-[500px] p-[20px] rounded-xl">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-transparent outline-none placeholder-white"
          />
          <Button text="Subscribe"></Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
