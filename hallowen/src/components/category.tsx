import elemdata from "@/data/elemdata.json";
const category = () => {
  const data = elemdata.category;
  return (
    <section
      className="min-h-screen w-full md:pt-[5vw] pt-[100px]"
      id="category">
      <div>
        <h1 className="text-center text-[48px] capitalize font-[900] leading-[45px]">
          {data.h1}
        </h1>
        <div className="flex justify-center flex-wrap md:flex-nowrap">
          
        {/* <div className="text-center py-[20px] px-[30px]">
            <img src={data.item1.img} alt="" />
            <h1 className="font-[900] text-[20px] ">{data.item1.h1}</h1>
            <p>{data.item1.p}</p>
          </div>

          <div className="text-center py-[20px]  px-[30px]">
            <img src={data.item2.img} alt="" />
            <h1 className="font-[900] text-[20px]">{data.item2.h1}</h1>
            <p>{data.item2.p}</p>
          </div>

          <div className="text-center py[20px]  px-[30px]">
            <img src={data.item3.img} alt="" />
            <h1 className="font-[900] text-[20px]">{data.item3.h1}</h1>
            <p>{data.item3.p}</p>
          </div> */}

        </div>
      </div>
    </section>
  );
};
export default category;
