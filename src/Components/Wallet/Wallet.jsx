import { useEffect, useState } from "react";
import React from "react";
import { Connect } from "vite";
import connectWallet from "../../utils/ConnectWallet";

const Wallet = () => {
  const [state, setState] = useState({
    provider: nul,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        account,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await connectWallet();
      setState({
        provider,
        account,
        stakingContract,
        stakeTokenContract,
        chainId,
      });
    } catch (error) {
      console.error("Error Connecting to Wallet", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return <div>Wallet</div>;
};

export default Wallet;
