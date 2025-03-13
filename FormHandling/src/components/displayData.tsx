import { DisplayDataType } from "@/app/utils/types";
const DisplayData = (props: DisplayDataType) => {
  return (
    <div className="bg-blue-200 rounded-2xl shadow-sm p-[10px]">
      <h1>
        <span className="font-extrabold">Name :</span> {props.info.name}
      </h1>
      <h1>
        <span className="font-extrabold">Email :</span> {props.info.email}{" "}
      </h1>
      <h1>
        <span className="font-extrabold ">Message</span> {props.info.text}{" "}
      </h1>
    </div>
  );
};
export default DisplayData;
