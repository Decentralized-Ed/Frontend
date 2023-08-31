import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";

const Login = () => {
  const [isConnected, setIsConnected] = useState(false);

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

  return (
    <div>
      <div>
        <h1>React app authentication with metamask</h1>
      </div>
      <div>
        {!isConnected && (
          <div>
            <button onClick={onConnect}>Login</button>
          </div>
        )}
      </div>
      {isConnected && (
        <div>
          <div>
            <h2>You are connected to the meta mask</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
