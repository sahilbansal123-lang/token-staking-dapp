import React from "react";
import { Contract, ethers } from "ethers";
import StakingAbi from "../ABI/StakingAbi.json";
import StakeTokenAbi from "../ABI/StakeTokenAbi.json";

const connectWallet = async () => {
  try {
    let [signer, provider, stakingContract, stakeTokenContract, chainId] = [
      null,
    ];
    if (window.ethereum === null) {
      throw new Error("Metamask is not install");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    chainId = parseInt(chainIdHex, 16);

    let selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error("No Ethereum available");
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const stakingContractAddress = "0xd9145cce52d386f254917e481eb44e9943f39138";
    const stakeTokenContractAddress =
      "0xd8b934580fce35a11b58c6d73adee468a2833fa8";

    stakingContract = new Contract(stakingContractAddress, StakingAbi, signer);
    stakeTokenContract = new Contract(
      stakeTokenContractAddress,
      StakeTokenAbi,
      signer
    );

    return {
      provider,
      selectedAccount,
      stakeTokenContract,
      stakingContract,
      chainId,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }


};
export default connectWallet;
