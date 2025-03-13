import ArrivalCard from "./arrivalCard";
import elemdata from "@/data/elemdata.json";
const NewArrival = () => {
  const data = elemdata.newArrivals;
  return (
    <section className="min-h-screen" id="newarrival">
      <h1 className="text-[46px] font-[900] text-center py-[20px]">
        {data.h1}
      </h1>
      <div className="flex gap-8 flex-wrap md:flex-nowrap justify-center items-center">
        {data.items.map((item, index) => {
          return (
            <ArrivalCard
              status={item.status}
              img={item.img}
              hea={item.h1}
              par={item.p}
              price={item.price}
              disc={item.disc}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default NewArrival;
