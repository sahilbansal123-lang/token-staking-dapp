import React from "react";
import { useContext } from "react";
import Web3Context from "../../Context/Web3Context";

const ConnectedNetwork = () => {
  const { chainId } = useContext(Web3Context);
  if (chainId === 11155111) {
    return <p>Connected Network: Connected Network is sepolia</p>;
  } else {
    return <p>Connected Network: Unsupported</p>;
  }
};

export default ConnectedNetwork;
