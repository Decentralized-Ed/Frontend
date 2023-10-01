const FeeReciept = () => {
  return (
    <>
      <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <div class="text-center mb-4">
          <h1 class="text-2xl font-semibold text-black">
            Student Fee Payment Receipt
          </h1>
        </div>
        <div class="mb-4">
          <p class="text-black mb-2 flex">
            <div className="w-[140px]">
              <strong>Student Name:</strong>
            </div>{" "}
            <input type="text" className="border border-black rounded w-1/2 " />
          </p>
          <p class="text-black mb-2 flex">
            <div className="w-[140px]">
              <strong>Semester:</strong>
            </div>{" "}
            <input type="text" className="border border-black rounded w-1/2 " />
          </p>
          <p class="text-black mb-2 flex">
            <div className="w-[140px]">
              <strong>Date:</strong>
            </div>{" "}
            <input type="text" className="border border-black rounded w-1/2" />
          </p>
          <p class="text-black flex">
            <div className="w-[140px]">
              <strong>Reciept ID:</strong>
            </div>{" "}
            <input type="text" className="border border-black rounded w-1/2" />
          </p>
        </div>
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-black text-left">Description</th>
              <th class="py-2 px-4 bg-black text-right">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border text-black">Tuition Fee</td>
              <td class="py-2 px-4 border text-right text-black">
                <input
                  type="text"
                  className="border border-black rounded text-right w-1/2"
                />
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 border text-black">Books and Supplies</td>
              <td class="py-2 px-4 border text-right text-black">
                <input
                  type="text"
                  className="border border-black rounded text-right w-1/2"
                />
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 border text-black">Hostel and Mess Fee</td>
              <td class="py-2 px-4 border text-right text-black">
                <input
                  type="text"
                  className="border border-black rounded text-right w-1/2"
                />
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 border text-black">Total Amount Paid</td>
              <td class="py-2 px-4 border text-right font-semibold text-black"></td>
            </tr>
          </tbody>
        </table>
        <div class="mt-4 text-right">
          <p class="text-black">
            <strong>Payment Method:</strong>{" "}
            <input
              type="text"
              className="border border-black rounded text-right w-1/2 mt-3"
            />
          </p>
        </div>
        <div class="mt-6">
          <p class="text-sm text-gray-600">Thank you for your payment!</p>
        </div>
      </div>
    </>
  );
};

export default FeeReciept;
