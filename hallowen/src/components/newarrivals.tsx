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
        <ArrivalCard
          status={data.item1.status}
          img={data.item1.img}
          hea={data.item1.h1}
          par={data.item1.p}
          price={data.item1.price}
          disc={data.item1.disc}
        />
        <ArrivalCard
          status={data.item2.status}
          img={data.item2.img}
          hea={data.item2.h1}
          par={data.item2.p}
          price={data.item2.price}
          disc={data.item2.disc}
        />
        <ArrivalCard
          status={data.item3.status}
          img={data.item3.img}
          hea={data.item3.h1}
          par={data.item3.p}
          price={data.item3.price}
          disc={data.item3.disc}
        />
      </div>
    </section>
  );
};
export default NewArrival;
