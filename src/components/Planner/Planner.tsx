import React from "react";
import Hive from "./Hive/Hive";

function Planner() {
  return (
    <div className="planner">
      <div className="planner-container">
        <div className="planner-title">Hive Planner</div>
        <Hive />
      </div>
    </div>
  );
}

export default Planner;
