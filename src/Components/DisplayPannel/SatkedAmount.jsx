import React from "react";
import Web3Context from "../../Context/Web3Context";
import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";

const SatkedAmount = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const { satkedAmount, setStakedAccount } = useState("0");

  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        const amountStaked = await stakingContract.stakedBalance(
          selectedAccount
        );
        console.log(amountStaked);
      } catch (error) {
        console.error("Error in fetching data: ", error.message);
      }
    };
    stakingContract && fetchStakedBalance();
  }, [stakingContract, selectedAccount]);
};

export default SatkedAmount;
