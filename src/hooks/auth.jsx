import axios from "axios";
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      //   const response = await axios.post("api/login", {
      //     email,
      //     password,
      //   });
      //   const userData = response.data;
      //   setUser(userData);
      setUser(email);
      setError(null);
    } catch (err) {
      setError("Some error while logging in");
    }
  };

  const signUp = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signUp",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      const userData = response.data;
      setUser(userData);
      setError(null);
    } catch (err) {
      setError("Some error while performing the signUp.");
    }
  };

  return {
    user,
    error,
    login,
    signUp,
  };
};

export default useAuth;
