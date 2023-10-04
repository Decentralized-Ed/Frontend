import { useState } from "react";

const Transcript = () => {
  const [buttonCheck, setButtonCheck] = useState(true);

  document.addEventListener("input", function () {
    const data = document.getElementsByClassName("buttonCheck");
    setButtonCheck(Array.from(data).some((input) => !input.value));
  });
  return (
    <>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-black mb-5">
        <h1 className="text-2xl font-semibold mb-4">College Transcript</h1>
        <div className="mb-4">
          <label
            for="studentName"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name:
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            for="studentID"
            className="block text-sm font-medium text-gray-700"
          >
            Student ID:
          </label>
          <input
            type="text"
            id="studentID"
            name="studentID"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="ID"
          />
        </div>
        <table className="min-w-full mb-4">
          <thead>
            <tr>
              <th className="text-left">Course</th>
              <th className="text-left">Credit Hours</th>
              <th className="text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full md:w-1/3 buttonCheck"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Credits"
                  className="w-full md:w-1/3 buttonCheck"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full md:w-1/3 buttonCheck"
                />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full md:w-1/3 buttonCheck"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Credits"
                  className="w-full md:w-1/3 buttonCheck"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full md:w-1/3 buttonCheck"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-4">
          <label for="gpa" className="block text-sm font-medium text-gray-700">
            GPA:
          </label>
          <input
            type="text"
            id="gpa"
            name="gpa"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="GPA"
          />
        </div>
        <div className="mb-4">
          <label
            for="graduationDate"
            className="block text-sm font-medium text-gray-700"
          >
            Graduation Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="border rounded-md px-3 py-2 w-full text-black buttonCheck"
          />
        </div>
      </div>
      <div className="w-[100%] text-center">
        <button
          type="submit"
          className="mt-4 text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:cursor-not-allowed"
          disabled={buttonCheck}
        >
          Generate Document
        </button>
      </div>
    </>
  );
};

export default Transcript;
