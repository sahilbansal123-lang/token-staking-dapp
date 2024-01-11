import React from "react";
import { useContext } from "react";
import Web3Context from "../../Context/Web3Context";

const ConnectedAccount = () => {
  const { selectedAccount } = useContext(Web3Context);
  return <p>Connected Account:{selectedAccount}</p>;
};

export default ConnectedAccount;
