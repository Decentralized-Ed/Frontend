const Gradesheet = () => {
  return (
    <>
      <div
        class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-5"
        id="gradesheet"
      >
        <h1 class="text-2xl font-semibold mb-4 text-black">
          College Grade Sheet
        </h1>
        <div class="mb-4">
          <label
            for="collegeName"
            class="block text-sm font-medium text-gray-700 font-bold"
          >
            College Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            class="border rounded-md px-3 py-2 w-full text-black "
            placeholder="College Name"
          />
        </div>
        <div class="mb-4">
          <label
            for="collegeName"
            class="block text-sm font-medium text-gray-700"
          >
            Student Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            class="border rounded-md px-3 py-2 w-full text-black"
            placeholder="Student Name"
          />
        </div>
        <div class="mb-4">
          <label for="date" class="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            class="border rounded-md px-3 py-2 w-full text-black"
          />
        </div>
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="text-left text-black">Subject</th>
              <th class="text-left text-black">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Subject"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Subject"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Subject"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Subject"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Subject"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Grade"
                />
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Subject"
                />
              </td>
              <td class="border px-4 py-2">
                <input
                  type="text"
                  className="w-full text-black"
                  placeholder="Grade"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Gradesheet;
