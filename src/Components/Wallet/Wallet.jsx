import { useEffect, useState } from "react";
import connectWallet from "../../utils/ConnectWallet";
import { handleAccountChange } from "../../utils/HandleAccountChange";
import { handleChainChange } from "../../utils/HandleChainChange";
import Web3Context from "../../Context/Web3Context";
import Button from "../Button";

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.ethereum.on("accountsChanged", () => {
      handleAccountChange(setState);
    });
    window.ethereum.on("chainChanged", () => {
      handleChainChange(setState);
    });

    return () => {
      window.ethereum.removeListener("accountsChanged", () => {
        handleAccountChange(setState);
      });
      window.ethereum.removeListener("chainChanged", () => {
        handleChainChange(setState);
      });
    };
  }, []);

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

  return (
    <div>
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      {isLoading && <p>Loading....</p>}
      <Button onClick={handleWallet} label="Connect Wallet" />
    </div>
  );
};

export default Wallet;
