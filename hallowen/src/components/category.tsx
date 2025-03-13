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
          {data.items.map((item , index) => {
            return (
              <div className="text-center py-[20px] px-[30px]" key={index}>
                <img src={item.img} alt="" />
                <h1 className="font-[900] text-[20px] ">{item.h1}</h1>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default category;
