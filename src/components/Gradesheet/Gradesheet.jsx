import { useState } from "react";

const Gradesheet = () => {
  const [buttonCheck, setButtonCheck] = useState(true);

  document.addEventListener("input", function () {
    const data = document.getElementsByClassName("buttonCheck");
    setButtonCheck(Array.from(data).some((input) => !input.value));
  });
  return (
    <>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-5">
        <h1 className="text-2xl font-semibold mb-4 text-black">
          College Grade Sheet
        </h1>
        <div className="mb-4">
          <label
            for="collegeName"
            className="block text-sm font-medium text-gray-700 font-bold"
          >
            College Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            className="border rounded-md px-3 py-2 w-full text-black buttonCheck"
            placeholder="College Name"
          />
        </div>
        <div className="mb-4">
          <label
            for="collegeName"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            className="border rounded-md px-3 py-2 w-full text-black buttonCheck"
            placeholder="Student Name"
          />
        </div>
        <div className="mb-4">
          <label for="date" className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="border rounded-md px-3 py-2 w-full text-black buttonCheck"
          />
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-black">Subject</th>
              <th className="text-left text-black">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Subject"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Subject"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Subject"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Subject"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Subject"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Subject"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black buttonCheck"
                  placeholder="Grade"
                />
              </td>
            </tr>
          </tbody>
        </table>
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

export default Gradesheet;
