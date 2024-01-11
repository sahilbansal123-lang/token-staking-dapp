import React from "react";
import SatkedAmount from "./SatkedAmount";
import EarnedReward from "./EarnedReward";
import RewardRate from "./RewardRate";

const DisplayPannel = () => {
  return (
    <div>
      <SatkedAmount />
      <RewardRate />
      <EarnedReward />
    </div>
  );
};

export default DisplayPannel;
