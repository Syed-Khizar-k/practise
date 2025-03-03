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
        <CandyCard
          hea={data.item1.h1}
          par={data.item1.p}
          price={data.item1.price}
          img={data.item1.img}
        />
        <CandyCard
          hea={data.item2.h1}
          par={data.item2.p}
          price={data.item2.price}
          img={data.item2.img}
        />
        <CandyCard
          hea={data.item3.h1}
          par={data.item3.p}
          price={data.item3.price}
          img={data.item3.img}
        />
        <CandyCard
          hea={data.item4.h1}
          par={data.item4.p}
          price={data.item4.price}
          img={data.item4.img}
        />
        <CandyCard
          hea={data.item5.h1}
          par={data.item5.p}
          price={data.item5.price}
          img={data.item5.img}
        />
        <CandyCard
          hea={data.item6.h1}
          par={data.item6.p}
          price={data.item6.price}
          img={data.item6.img}
        />
      </div>
    </section>
  );
};
export default Candy;
