import CandyCard from "./candycard";
import elemdata from "@/data/elemdata.json";
const Candy = () => {
  const data = elemdata.candy;
  return (
    <section id="candy" className="min-h-screen py-[70px]">
      <h1 className="text-[48px] font-[900] text-center pb-[50px]">
        {data.mh1}
      </h1>
      <div className="grid justify-center gap-6 md:grid-cols-3 md:px-[100px]">
        {elemdata.candy.items.map((item, index) => {
          return (
            <CandyCard
              hea={item.h1}
              par={item.p}
              price={item.price}
              img={item.img}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Candy;
