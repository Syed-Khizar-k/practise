import CandyCard from "./candycard";

const Candy = () => {
  return (
    <section id="Candy" className="min-h-screen py-[70px]">
      <h1 className="text-[48px] font-[900] text-center pb-[50px]">
        Trick Or Teat
      </h1>
      <div className="grid justify-center gap-6 md:grid-cols-3 md:px-[100px]">
        <CandyCard
          hea="toffee"
          par="candy"
          price="$ 12.12"
          img="/trick-treat1-img.png"
        />
        <CandyCard
          hea="bone"
          par="accessory"
          price="$ 8.99"
          img="/trick-treat2-img.png"
        />
        <CandyCard
          hea="sacrecrow"
          par="accessory"
          price="$ 15.10"
          img="/trick-treat3-img.png"
        />
        <CandyCard
          hea="candy cane"
          par="candy"
          price="$ 7.0"
          img="/trick-treat4-img.png"
        />
        <CandyCard
          hea="pumpkin"
          par="candy"
          price="$ 19.97"
          img="/trick-treat5-img.png"
        />
        <CandyCard
          hea="ghost"
          par="accessory"
          price="$ 17.99"
          img="/trick-treat6-img.png"
        />
      </div>
    </section>
  );
};
export default Candy;
