import metamask from "../../assets/metamask.png";
const MetaMask = () => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
      >
        <img className="mr-2" src={metamask} alt="" />
        Connect with MetaMask
      </button>
    </div>
  );
};

export default MetaMask;
