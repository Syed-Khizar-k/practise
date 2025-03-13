import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numbersAllowed, SetnumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState("Copy");

  //useref hook
  const passwordRef = useRef(null);
  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setBtn("copied");
  }, [password]);
  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$_-;%&*?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numbersAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed, setPassword]);
  return (
    <>
      <div className="md:px-[15vw] px-[30px] text-white  ">
        <div className="w-full rounded-md bg-gray-700 py-[20px] md:px-[100px] px-[10px]  mt-[10%]">
          <h1 className="text-[22px] md:text-[38px] font-[900] text-center py-[20px]">
            Password Generator
          </h1>
          <div className="w-full rounded-md flex justify-center items-center">
            <input
              type="text"
              placeholder="Select Items and Generate"
              className="bg-white md:p-[10px] p-[5px] outline-none w-[70%] text-[18px] md:text-[22px] rounded-l-md text-black"
              value={password}
              ref={passwordRef}
            />
            <button
              className="w-[30%] bg-blue-800 text-white md:py-[18px] text-[18px] py-[14px] font-[700] rounded-r-md"
              onClick={copyPassword}>
              {btn}
            </button>
          </div>

          <div className="pt-[10px]">
            <input
              type="range"
              value={length}
              min={6}
              max={18}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="pl-[10px] text-[18px]">Length : {length}</label>
          </div>
          <div className="pt-[10px]">
            <input
              type="checkbox"
              className="scale-150 ml-[20px]"
              defaultChecked={numbersAllowed}
              onChange={() => {
                SetnumbersAllowed(!numbersAllowed);
              }}
            />
            <label className="pl-[10px] text-[18px]">Numbers</label>
          </div>
          <div className="pt-[10px]">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="scale-150 ml-[20px]"
              onChange={() => {
                setCharAllowed(!charAllowed);
              }}
            />
            <label className="pl-[10px] text-[18px]">Charachters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
