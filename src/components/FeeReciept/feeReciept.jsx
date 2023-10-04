import { useState } from "react";

const FeeReciept = () => {
  const [buttonCheck, setButtonCheck] = useState(true);

  document.addEventListener("input", function () {
    const data = document.getElementsByClassName("buttonCheck");
    setButtonCheck(Array.from(data).some((input) => !input.value));
  });
  return (
    <>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-black">
            Student Fee Payment Receipt
          </h1>
        </div>
        <div className="mb-4">
          <p className="text-black mb-2 flex">
            <div className="w-[140px]">
              <strong>Student Name:</strong>
            </div>{" "}
            <input
              type="text"
              className="border border-black rounded w-1/2 buttonCheck"
            />
          </p>
          <p className="text-black mb-2 flex">
            <div className="w-[140px]">
              <strong>Semester:</strong>
            </div>{" "}
            <input
              type="text"
              className="border border-black rounded w-1/2 buttonCheck"
            />
          </p>
          <p className="text-black mb-2 flex">
            <div className="w-[140px]">
              <strong>Date:</strong>
            </div>{" "}
            <input
              type="text"
              className="border border-black rounded w-1/2 buttonCheck"
            />
          </p>
          <p className="text-black flex">
            <div className="w-[140px]">
              <strong>Reciept ID:</strong>
            </div>{" "}
            <input
              type="text"
              className="border border-black rounded w-1/2 buttonCheck"
            />
          </p>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-black text-left">Description</th>
              <th className="py-2 px-4 bg-black text-right">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border text-black">Tuition Fee</td>
              <td className="py-2 px-4 border text-right text-black">
                <input
                  type="text"
                  className="border border-black rounded text-right w-1/2 buttonCheck"
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border text-black">
                Books and Supplies
              </td>
              <td className="py-2 px-4 border text-right text-black">
                <input
                  type="text"
                  className="border border-black rounded text-right w-1/2 buttonCheck"
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border text-black">
                Hostel and Mess Fee
              </td>
              <td className="py-2 px-4 border text-right text-black">
                <input
                  type="text"
                  className="border border-black rounded text-right w-1/2 buttonCheck"
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border text-black">Total Amount Paid</td>
              <td className="py-2 px-4 border text-right font-semibold text-black"></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-right">
          <p className="text-black">
            <strong>Payment Method:</strong>{" "}
            <input
              type="text"
              className="border border-black rounded text-right w-1/2 mt-3 buttonCheck"
            />
          </p>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600">Thank you for your payment!</p>
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
};

export default FeeReciept;
