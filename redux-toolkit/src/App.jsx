import { fakeUserData } from "./api";
import "./App.css";
import { useDispatch } from "react-redux";
import { addUser, deleteUsers, userSlice } from "./store/slices/UserSlice";
import DisplayData from "./components/DisplayData";
function App() {
  const dispatch = useDispatch();
  //delete all users by converting their stawe to initial
  const deleteAll = () => {
    dispatch(deleteUsers(s));
  };
  //add new user by calling addUser from userSLice
  const addNewUser = (param) => {
    console.log(param);
    dispatch(addUser(param));
  };
  return (
    <>
      <main className="py-[50px] px-[200px]">
        <div className="text-3xl text-center font-stretch-50% font-bold">
          Redux Tool Kit Practise
        </div>
        <div className="text-center">
          <h1>Data of all the members</h1>
          <div>
            <button
              className="bg-blue-700 rounded-sm p-[10px] cursor-pointer"
              onClick={() => {
                addNewUser(fakeUserData());
              }}>
              add memeber{" "}
            </button>
            <div className="py-[10px] border-t-1 border-b-1">
              <DisplayData />
            </div>
          </div>

          <div>
            <button
              className="bg-red-700 rounded-sm p-[10px] cursor-pointer"
              onClick={() => deleteAll()}>
              Delete{" "}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
