import { useNavigate } from "react-router-dom";

const VerifyModal = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    // After verification, navigate to the /login page
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full relative">
        <h2 className="text-xl font-semibold mb-4">Verification Email Sent</h2>
        <p className="text-gray-700 mb-6">
          We&apos;ve sent a verification email to your inbox. Please verify your
          email, using the verification link that we have sent to your mail.
        </p>

        <button
          onClick={handleVerify}
          className="w-full mt-4 text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default VerifyModal;
