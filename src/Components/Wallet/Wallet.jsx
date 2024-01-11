import { useEffect, useState } from "react";
import connectWallet from "../../utils/ConnectWallet";

const Wallet = () => {
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
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
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await connectWallet();

      console.log(
        "provider:",
        provider,
        "selectedAccount:",
        selectedAccount,
        "stakingContract",
        stakingContract,
        "stakeTokenContract",
        stakeTokenContract,
        "chainId",
        chainId
      );

      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      });
    } catch (error) {
      console.error("Error Connecting to Wallet:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return <button onClick={handleWallet}>Connect Wallet</button>;
};

export default Wallet;
