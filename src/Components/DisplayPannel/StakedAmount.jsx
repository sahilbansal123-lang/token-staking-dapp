import React from "react";
import Web3Context from "../../Context/Web3Context";
import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";

const StakedAmount = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const [stakedAmount, setStakedAmount] = useState("0");

  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        const amountStakedWei = await stakingContract.stakedBalance(
          selectedAccount
        );
        const amountStakedEth = ethers.formatUnits(
          amountStakedWei.toString(),
          18
        );
        setStakedAmount(amountStakedEth);
        console.log(amountStakedEth);
      } catch (error) {
        toast.error("Error fetching staked amount");
        console.error(error.message);
      }
    };
    stakingContract && fetchStakedBalance();
  }, [stakingContract, selectedAccount]);
};

export default StakedAmount;
