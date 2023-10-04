const Transcript = () => {
  return (
    <>
      <div
        class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-black mb-5"
        id="transcript"
      >
        <h1 class="text-2xl font-semibold mb-4">College Transcript</h1>
        <div class="mb-4">
          <label
            for="studentName"
            class="block text-sm font-medium text-gray-700"
          >
            Student Name:
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="Name"
          />
        </div>
        <div class="mb-4">
          <label
            for="studentID"
            class="block text-sm font-medium text-gray-700"
          >
            Student ID:
          </label>
          <input
            type="text"
            id="studentID"
            name="studentID"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="ID"
          />
        </div>
        <table class="min-w-full mb-4">
          <thead>
            <tr>
              <th class="text-left">Course</th>
              <th class="text-left">Credit Hours</th>
              <th class="text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Sample course rows (replace with actual data) --> */}
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full md:w-1/3"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Credits"
                  className="w-full md:w-1/3"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full md:w-1/3"
                />
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full md:w-1/3"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Credits"
                  className="w-full md:w-1/3"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full md:w-1/3"
                />
              </td>
            </tr>

            {/* <!-- Add more course rows as needed --> */}
          </tbody>
        </table>
        <div class="mb-4">
          <label for="gpa" class="block text-sm font-medium text-gray-700">
            GPA:
          </label>
          <input
            type="text"
            id="gpa"
            name="gpa"
            class="border rounded-md px-3 py-2 w-full"
            placeholder="GPA"
          />
        </div>
        <div class="mb-4">
          <label
            for="graduationDate"
            class="block text-sm font-medium text-gray-700"
          >
            Graduation Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            class="border rounded-md px-3 py-2 w-full text-black"
          />
        </div>
      </div>
    </>
  );
};

export default Transcript;
