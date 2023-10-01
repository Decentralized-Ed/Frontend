function IDcard() {
  return (
    <div className="w-full h-full bg-white rounded text-black mb-6">
      <div className="h-[80%] flex justify-between items-center">
        <div className="w-[40%] h-[100%] flex justify-center items-center">
          <div className="border-solid border-[#ff1689] border-[3px] w-[75%] h-[80%]">
            <img src="" alt="image of student" />
          </div>
        </div>
        <div className="w-[60%] h-[100%] flex flex-col justify-around">
          <div>
            <label>Name: </label>
            <input type="text" placeholder="Name of Student" />
          </div>
          <div>
            <label>Roll No: </label>
            <input type="text" placeholder="Roll No." />
          </div>
          <div>
            <label>Batch: </label>
            <input type="text" placeholder="Batch" />
          </div>
          <div>
            <label>Issued On: </label>
            <input type="date" placeholder="Issued On" />
          </div>
          <div>
            <label>Valid Upto: </label>
            <input type="date" placeholder="Expires On" />
          </div>
        </div>
      </div>
      <div className="h-[20%] bg-[#ff1689] rounded flex items-center p-5">
        <div className="text-white">College Name</div>
      </div>
    </div>
  );
}
export default IDcard;
