type ButtonText = {
  text: string;
};
const Button = (props: ButtonText) => {
  return (
    <button className="bg-orange-700 text-[14px] font-[700] py-[15px] px-[22px] rounded-lg">
      {props.text}
    </button>
  );
};

export default Button;
