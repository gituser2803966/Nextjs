import React from "react";
import Sidebar from "../components/Sidebar";
import TabPanel from "../components/TabPanel";

function data() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex max-h-screen flex-grow overflow-scroll">
        <TabPanel />
      </div>
    </div>
  );
}

export default data;
