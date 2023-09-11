import metamask from "../../assets/metamask.png";
const MetaMask = () => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-pink-600 font-normal rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 text-center inline-flex items-center mr-2 mb-2"
      >
        {/* <img className="mr-2" src={metamask} alt="" /> */}
        Sign In
      </button>
    </div>
  );
};

export default MetaMask;
