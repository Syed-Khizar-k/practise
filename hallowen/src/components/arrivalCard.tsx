type ArrivalCard = {
  img: string;
  status: string;
  hea: string;
  par: string;
  price: string;
  disc: string;
};
const ArrivalCard = (props: ArrivalCard) => {
  return (
    <div className="card w-full md:h-[350px] md:w-[350px] backdrop-blur-lg bg-gray-800/5 md:p-[20px] p-[10px]  relative rounded-3xl shadow hover:shadow-xl transition-shadow duration-300">
      <div className="md:h-[50%] h-[70%] flex justify-center  ">
        <img src={props.img} alt="" className="h-[170px] " />
      </div>
      <p className="absolute top-[20px] bg-orange-700 font-[600] py-[3px] px-[10px] rounded-md">
        {props.status}
      </p>
      <div className="md:h-[50%] h-[30%] text-center pt-[30px]">
        <h1 className="text-[24px] font-[900] capitalize">{props.hea}</h1>
        <p className="text-[16px]">{props.par}</p>
        <p className="text-[18px] font-[900] pt-[20px]">
          {props.price}
          <span className="text-orange-700 text-[14px] line-through px-[10px]">
            {props.disc}
          </span>
        </p>
      </div>
    </div>
  );
};
export default ArrivalCard;
