import { useState } from "react";

const TransferCertificate = () => {
  const [buttonCheck, setButtonCheck] = useState(true);

  document.addEventListener("input", function () {
    const data = document.getElementsByClassName("buttonCheck");
    setButtonCheck(Array.from(data).some((input) => !input.value));
  });
  return (
    <>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-black mt-5 md:w-[700px] sm:w-[100%]">
        <h1 className="text-2xl font-semibold mb-4">
          College Transfer Certificate
        </h1>

        {/* <!-- College Name Input --> */}
        <div className="mb-4">
          <label
            for="collegeName"
            className="block text-sm font-medium text-gray-700"
          >
            College Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="Enter College Name"
          />
        </div>

        {/* <!-- Admission Number Input --> */}
        <div className="mb-4">
          <label
            for="admissionNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Admission Number:
          </label>
          <input
            type="text"
            id="admissionNumber"
            name="admissionNumber"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="Enter Admission Number"
          />
        </div>

        {/* <!-- Student Information Section --> */}
        <h2 className="text-lg font-semibold mt-4 mb-2">Student Information</h2>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="studentName"
            className="block text-sm font-medium text-gray-700"
          >
            Pupil Name:
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter Pupil Name"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="fatherName"
            className="block text-sm font-medium text-gray-700"
          >
            Father's Name:
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter Father's Name"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="motherName"
            className="block text-sm font-medium text-gray-700"
          >
            Mother's Name:
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter Mother's Name"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="nationality"
            className="block text-sm font-medium text-gray-700"
          >
            Nationality:
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter Nationality"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="caste"
            className="block text-sm font-medium text-gray-700"
          >
            Caste:
          </label>
          <input
            type="text"
            id="caste"
            name="caste"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter Caste"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label for="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="subjectsStudied"
            className="block text-sm font-medium text-gray-700"
          >
            Subjects Studied:
          </label>
          <input
            type="text"
            id="subjectsStudied"
            name="subjectsStudied"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter Subjects Studied"
          />
        </div>

        {/* <!-- Certificate Details Section --> */}
        <h2 className="text-lg font-semibold mt-4 mb-2">Certificate Details</h2>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="qualified"
            className="block text-sm font-medium text-gray-700"
          >
            Whether Qualified:
          </label>
          <input
            type="text"
            id="qualified"
            name="qualified"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Yes/No"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="daysPresent"
            className="block text-sm font-medium text-gray-700"
          >
            No. of Days Present:
          </label>
          <input
            type="text"
            id="daysPresent"
            name="daysPresent"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter No. of Days Present"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="workingDays"
            className="block text-sm font-medium text-gray-700"
          >
            No. of Working Days:
          </label>
          <input
            type="text"
            id="workingDays"
            name="workingDays"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
            placeholder="Enter No. of Working Days"
          />
        </div>
        <div className="mb-4">
          <label
            for="conduct"
            className="block text-sm font-medium text-gray-700"
          >
            General Conduct:
          </label>
          <textarea
            id="conduct"
            name="conduct"
            rows="3"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="Enter General Conduct"
          ></textarea>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="applicationDate"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Application:
          </label>
          <input
            type="date"
            id="applicationDate"
            name="applicationDate"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label
            for="issueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Issue:
          </label>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            className="border rounded-md px-3 py-2 w-[70%] buttonCheck"
          />
        </div>
        <div className="mb-4">
          <label
            for="remarks"
            className="block text-sm font-medium text-gray-700"
          >
            Other Remarks:
          </label>
          <textarea
            id="remarks"
            name="remarks"
            rows="3"
            className="border rounded-md px-3 py-2 w-full buttonCheck"
            placeholder="Enter Other Remarks"
          ></textarea>
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

export default TransferCertificate;
