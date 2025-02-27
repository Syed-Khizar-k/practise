type CandyCard = {
  img: string;
  hea: string;
  par: string;
  price: string;
};

const CandyCard = (props: CandyCard) => {
  return (
    <div className="  md:w-[17vw] bg-gray-800/5 backdrop-blur-lg rounded-3xl shadow hover:shadow-lg text-center items-center py-[10px] px-[50px]">
      <img
        src={props.img}
        alt="candy image"
        className="md:h-[150px] h-[250px] w-full"
      />
      <h1 className="md:text-[22px] text-[28px] font-[900] capitalize">
        {props.hea}
      </h1>
      <p className="capitalize ">{props.par}</p>
      <p className="text-[18px] font-[900]">{props.price}</p>
    </div>
  );
};
export default CandyCard;
