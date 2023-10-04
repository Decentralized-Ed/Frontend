import { useEffect, useState } from "react";
import StudentPhoto from "../../StudentPhoto.webp";

function IDcard() {
  const [buttonCheck, setButtonCheck] = useState(true);

  document.addEventListener("input", function () {
    const data = document.getElementsByClassName("buttonCheck");
    setButtonCheck(Array.from(data).some((input) => !input.value));
  });

  return (
    <>
      <div className="w-full flex justify-center items-center text-black">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <div className="h-[80%] flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-[40%] h-auto md:h-[100%] flex justify-center items-center">
              <div className="border-solid border-[#ff1689] border-[3px] w-[75%] h-[80%] md:h-[100%] rounded-lg overflow-hidden">
                <img
                  src={StudentPhoto}
                  alt="image of student"
                  className="w-48 h-48 object-fit"
                />
              </div>
            </div>
            <div className="w-full md:w-[60%] h-auto md:h-[100%] flex flex-col justify-around p-4">
              <div className="mb-3">
                <label className="text-gray-600 text-sm md:text-base">
                  Name:
                </label>
                <input
                  name="Name"
                  type="text"
                  placeholder="Name of Student"
                  className="buttonCheck w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-600 text-sm md:text-base">
                  Roll No:
                </label>
                <input
                  name="RollNo"
                  type="text"
                  placeholder="Roll No."
                  className="buttonCheck w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-600 text-sm md:text-base">
                  Batch:
                </label>
                <input
                  name="Batch"
                  type="text"
                  placeholder="Batch"
                  className="buttonCheck w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-600 text-sm md:text-base">
                  Issued On:
                </label>
                <input
                  name="IssuedOn"
                  type="date"
                  placeholder="Issued On"
                  className="buttonCheck w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-600 text-sm md:text-base">
                  Valid Upto:
                </label>
                <input
                  name="ValidUpto"
                  type="date"
                  placeholder="Expires On"
                  className="buttonCheck w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
                />
              </div>
            </div>
          </div>
          <div className="h-[20%] bg-[#ff1689] rounded-b-lg flex items-center p-5">
            <div className="text-white text-center w-full">
              <input
                name="CollegeName"
                type="text"
                placeholder="College Name"
                className="buttonCheck w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689] text-black text-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] text-center">
        <button
          type="submit"
          className="mt-4 text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:cursor-not-allowed"
          disabled={buttonCheck}
          onClick={() => {
            console.log("hello");
          }}
        >
          Generate Document
        </button>
      </div>
    </>
  );
}

export default IDcard;
