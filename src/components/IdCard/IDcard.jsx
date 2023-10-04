function IDcard() {
  return (
    <div className="w-full flex justify-center items-center text-black">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[80%] flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[40%] h-auto md:h-[100%] flex justify-center items-center">
            <div className="border-solid border-[#ff1689] border-[3px] w-[75%] h-[80%] md:h-[100%] rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="image of student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%] h-auto md:h-[100%] flex flex-col justify-around p-4">
            <div className="mb-3">
              <label className="text-gray-600 text-sm md:text-base">
                Name:
              </label>
              <input
                type="text"
                placeholder="Name of Student"
                className="w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 text-sm md:text-base">
                Roll No:
              </label>
              <input
                type="text"
                placeholder="Roll No."
                className="w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 text-sm md:text-base">
                Batch:
              </label>
              <input
                type="text"
                placeholder="Batch"
                className="w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 text-sm md:text-base">
                Issued On:
              </label>
              <input
                type="date"
                placeholder="Issued On"
                className="w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 text-sm md:text-base">
                Valid Upto:
              </label>
              <input
                type="date"
                placeholder="Expires On"
                className="w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689]"
              />
            </div>
          </div>
        </div>
        <div className="h-[20%] bg-[#ff1689] rounded-b-lg flex items-center p-5">
          <div className="text-white text-center w-full">
            <input
              type="text"
              placeholder="College Name"
              className="w-full border border-gray-300 rounded-md px-2 py-2 md:py-1 focus:outline-none focus:border-[#ff1689] text-black text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IDcard;
