import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayData = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const deleteThis = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {data.map((e, id) => {
        return (
          <div
            className="flex gap-6 justify-center items-center border-b-1 py-[10px]"
            key={id}>
            <span>{e}</span>
            <button
              className="bg-red-500 text-white p-[4px] rounded-md "
              onClick={() => deleteThis(id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
