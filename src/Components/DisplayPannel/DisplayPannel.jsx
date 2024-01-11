import React from "react";
import SatkedAmount from "./StakedAmount";
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
