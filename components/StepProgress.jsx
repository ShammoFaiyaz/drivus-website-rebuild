import { Progress } from "antd";
import React from "react";

const StepProgress = ({ percent }) => {
  return (
    <Progress
      strokeColor={{
        from: "#ef4444",
        to: "#7e22ce",
      }}
      strokeWidth={16}
      percent={percent || 0}
    />
  );
};

export default StepProgress;
