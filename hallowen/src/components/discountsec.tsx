import elemdata from "@/data/elemdata.json";
import Button from "./button";
const Discount = () => {
  const data = elemdata.discount;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section
        className="flex flex-col md:flex-row justify-items-center items-center py-[50px] md:py-[50px] md:px-[60px] w-full bg-blur bg-gray-800/5 backdrop-blur-lg rounded-[70px] gap-8 "
        id="discount">
        <div className="w-[50%]">
          <img
            src={data.img}
            alt=""
            className="h-[200px] md:h-[250px] w-full"
          />
        </div>
        <div className="text-center">
          <h1 className="text-[28px] font-[900] py-4">{data.h1}</h1>
          <Button text={data.btn}></Button>
        </div>
      </section>
    </div>
  );
};
export default Discount;
