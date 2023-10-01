import { useNavigate } from "react-router-dom";

const VerifyModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleVerify = () => {
    // Perform any verification or account activation logic here

    // After verification, navigate to the /login page
    navigate("/login");

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full relative">
        {/* Close button (cross button) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold mb-4">Verification Email Sent</h2>
        <p className="text-gray-700 mb-6">
          We&apos;ve sent a verification email to your inbox. Please click the
          verification link to activate your account.
        </p>

        <button
          onClick={handleVerify}
          className="w-full mt-4 text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Verify Account
        </button>
      </div>
    </div>
  );
};

export default VerifyModal;
