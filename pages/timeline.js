import React from "react";
import CustomTimeline from "../components/CustomTimeline";
import ToggleSidebar from "../components/ToggleSidebar";

function timeline() {
  return (
    <div className="flex flex-col">
      <ToggleSidebar />
      <CustomTimeline />
    </div>
  );
}

export default timeline;
