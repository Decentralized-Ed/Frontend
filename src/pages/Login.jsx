import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import logo from "../assets/gmail.png";

const Login = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("It is a not etherum browser");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        if (ethBalance) {
          console.log({ EthBalance: ethBalance });
        }
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  // return (
  //   <div>
  //     <div>
  //       <h1>React app authentication with metamask</h1>
  //     </div>
  //     <div>
  //       {!isConnected && (
  //         <div>
  //           <button onClick={onConnect}>Login</button>
  //         </div>
  //       )}
  //     </div>
  //     {isConnected && (
  //       <div>
  //         <div>
  //           <h2>You are connected to the meta mask</h2>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center text-white cursor-default">
      <div className="flex flex-col justify-between h-[80vh]">
        <h1 className="text-[48px]">Welcome Back 👋</h1>
        <h2 className="text-[32px] mb-[32px] self-center">SignIn</h2>
        <div className="relative mb-[32px] before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#ff1689] before:transition-all before:duration-300 focus-within:before:w-[100%]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer h-[5vh] w-[100%] pl-[16px] border-white border-b-2 bg-transparent outline-none"
          />
          <div className="peer-focus:top-[-24px] peer-focus:text-[white] pointer-events-none absolute top-0 left-[18px] text-[#adadad]">
            Email
          </div>
        </div>
        <div className="relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#ff1689] before:transition-all before:duration-300 focus-within:before:w-[100%]">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer h-[5vh] w-[100%] pl-[16px] border-white border-b-2 bg-transparent outline-none"
          />
          <div className="peer-focus:top-[-24px] peer-focus:text-[white] pointer-events-none absolute top-0 left-[18px] text-[#adadad]">
            Password
          </div>
        </div>
        <div className="self-center cursor-pointer">Forgot Password?</div>
        <button className="bg-[#ff1689] cursor-pointer w-[100%] h-[5vh] rounded-full">
          Login
        </button>
        <h2 className="self-center">
          Don't have an account?{" "}
          <a className="text-[#ff1689]  cursor-pointer">Sign Up</a>
        </h2>
        <div className="flex flex-col items-center justify-between">
          <div className="labelfor">Or Continue With</div>
          <div className="flex justify-center">
            <img className="h-[50px] w-[50px] mr-5" src={logo} alt="" />
            <img className="h-[50px] w-[50px] mr-5" src={logo} alt="" />
            <img className="h-[50px] w-[50px] mr-5" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
