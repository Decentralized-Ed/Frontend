import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth";

const SignUpCard = () => {
  const navigate = useNavigate();
  const { user, error, signUp } = useAuth();

  console.log(user);

  const signUpWithEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value, e.target.password.value);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Hey I am in the sugnUp card.");
    signUp(email, password);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <section className="w-[50%] p-10">
        <div className="rounded-lg shadow dark:border md:mt-0 xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Welcome Back!!
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={signUpWithEmail}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Enter email
                </label>
                <div className="flex-col md:flex gap-1 md:gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 w-full md:w-auto border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@email.com"
                    required="true"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="OTP"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Enter Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="OTP"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Already have an account?
                  <br /> Sign In
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpCard;
