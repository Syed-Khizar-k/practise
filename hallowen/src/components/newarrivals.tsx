import ArrivalCard from "./arrivalCard";
const NewArrival = () => {
  return (
    <section className="min-h-screen" id="newarrival">
      <h1 className="text-[46px] font-[900] text-center py-[20px]">
        New Arrivals
      </h1>
      <div className="flex gap-8 flex-wrap md:flex-nowrap justify-center items-center">
        <ArrivalCard
          status="New"
          img="/new6-img.png"
          hea="Wish Broom"
          par="Accessory"
          price="$7.99"
          disc="$14.99"
        />
        <ArrivalCard
          status="New"
          img="/new1-img.png"
          hea="Haunted House"
          par="Accessory"
          price="$14.99"
          disc="$23.70"
        />
        <ArrivalCard
          status="New"
          img="/new2-img.png"
          hea="Hallowen Candle"
          par="Accessory"
          price="$11.99"
          disc="$28.99"
        />
      </div>
    </section>
  );
};
export default NewArrival;
