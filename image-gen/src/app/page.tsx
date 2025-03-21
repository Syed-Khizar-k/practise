"use client";
import { log } from "console";
import { Result } from "postcss";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// query({ inputs: "Astronaut riding a horse" }).then((response) => {

// });

const ImageGenerator = () => {
  // useState for text of input
  const [text, setText] = useState("");
  //useState for url of the image
  const [url, setUrl] = useState("");

  //usestate for loader
  const [loader, setLoader] = useState(false);
  async function query(data: object) {
    const response = await fetch(
      //fortrading8558 model api
      "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    const output = URL.createObjectURL(result);
    return output;
  }

  const onClickHandler = async () => {
    try {
      setLoader(true);
      const input = { inputs: text };
      const result = await query(input);
      setUrl(result);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="bg-gray-900">
      <Navbar></Navbar>
      <div className="bg-gray-900 min-h-screen flex justify-center items-center gap-4 flex-col ">
        <div className="w-[80%]  p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white capitalize">
            nextGen image generator
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            NextGen is a rectified flow transformer capable of generating images
            from text descriptions. @Model Created BY Syed Khizar
          </p>
          <div className="items-center flex flex-col gap-[20px] justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <textarea
              onChange={(e) => {
                setText(e.target.value);
              }}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              defaultValue={""}
            />
            <button
              onClick={onClickHandler}
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium 
          rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600
           dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-[20px]">
              Generate
            </button>
            {loader && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-sm flex gap-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-transparent dark:border-none">
          <a href={url}>
            <img
              className="rounded-lg w-[100%] h-[100%]  "
              src={url || "./dev_grid.jpg"}
              alt="no image"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ImageGenerator;
