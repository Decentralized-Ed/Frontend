const TransferCertificate = () => {
  return (
    <>
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-black mt-5 md:w-[700px] sm:w-[100%]">
        <h1 class="text-2xl font-semibold mb-4">
          College Transfer Certificate
        </h1>

        {/* <!-- College Name Input --> */}
        <div class="mb-4">
          <label
            for="collegeName"
            class="block text-sm font-medium text-gray-700"
          >
            College Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="Enter College Name"
          />
        </div>

        {/* <!-- Admission Number Input --> */}
        <div class="mb-4">
          <label
            for="admissionNumber"
            class="block text-sm font-medium text-gray-700"
          >
            Admission Number:
          </label>
          <input
            type="text"
            id="admissionNumber"
            name="admissionNumber"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="Enter Admission Number"
          />
        </div>

        {/* <!-- Student Information Section --> */}
        <h2 class="text-lg font-semibold mt-4 mb-2">Student Information</h2>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="studentName"
            class="block text-sm font-medium text-gray-700"
          >
            Pupil Name:
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter Pupil Name"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="fatherName"
            class="block text-sm font-medium text-gray-700"
          >
            Father's Name:
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter Father's Name"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="motherName"
            class="block text-sm font-medium text-gray-700"
          >
            Mother's Name:
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter Mother's Name"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="nationality"
            class="block text-sm font-medium text-gray-700"
          >
            Nationality:
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter Nationality"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label for="caste" class="block text-sm font-medium text-gray-700">
            Caste:
          </label>
          <input
            type="text"
            id="caste"
            name="caste"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter Caste"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label for="dob" class="block text-sm font-medium text-gray-700">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            class="border rounded-md px-3 py-2 w-[70%]"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="subjectsStudied"
            class="block text-sm font-medium text-gray-700"
          >
            Subjects Studied:
          </label>
          <input
            type="text"
            id="subjectsStudied"
            name="subjectsStudied"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter Subjects Studied"
          />
        </div>

        {/* <!-- Certificate Details Section --> */}
        <h2 class="text-lg font-semibold mt-4 mb-2">Certificate Details</h2>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="qualified"
            class="block text-sm font-medium text-gray-700"
          >
            Whether Qualified:
          </label>
          <input
            type="text"
            id="qualified"
            name="qualified"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Yes/No"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="daysPresent"
            class="block text-sm font-medium text-gray-700"
          >
            No. of Days Present:
          </label>
          <input
            type="text"
            id="daysPresent"
            name="daysPresent"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter No. of Days Present"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="workingDays"
            class="block text-sm font-medium text-gray-700"
          >
            No. of Working Days:
          </label>
          <input
            type="text"
            id="workingDays"
            name="workingDays"
            class="border rounded-md px-3 py-2 w-[70%]"
            placeholder="Enter No. of Working Days"
          />
        </div>
        <div class="mb-4">
          <label for="conduct" class="block text-sm font-medium text-gray-700">
            General Conduct:
          </label>
          <textarea
            id="conduct"
            name="conduct"
            rows="3"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="Enter General Conduct"
          ></textarea>
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="applicationDate"
            class="block text-sm font-medium text-gray-700"
          >
            Date of Application:
          </label>
          <input
            type="date"
            id="applicationDate"
            name="applicationDate"
            class="border rounded-md px-3 py-2 w-[70%]"
          />
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label
            for="issueDate"
            class="block text-sm font-medium text-gray-700"
          >
            Date of Issue:
          </label>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            class="border rounded-md px-3 py-2 w-[70%]"
          />
        </div>
        <div class="mb-4">
          <label for="remarks" class="block text-sm font-medium text-gray-700">
            Other Remarks:
          </label>
          <textarea
            id="remarks"
            name="remarks"
            rows="3"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="Enter Other Remarks"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default TransferCertificate;
