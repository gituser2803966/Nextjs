import React from "react";
import SidebarItem from "../components/SidebarItem";
import {
  BeakerIcon,
  HomeIcon,
  DatabaseIcon,
  ChartSquareBarIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

import TabPanel from "../components/TabPanel";

import { UserCircleIcon } from "@heroicons/react/solid";

function dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* sidebar */}
      <div className="flex bg-indigo-400 flex-col items-center justify-between py-2">
        <div className="flex flex-col px-3 ">
          <div className="flex">
            <SidebarItem Icon={HomeIcon} />
          </div>
          <div className="mt-5">
            <SidebarItem Icon={DatabaseIcon} />
            <SidebarItem Icon={ChartSquareBarIcon} />
            <SidebarItem Icon={BeakerIcon} />
            <SidebarItem Icon={CalendarIcon} />
          </div>
        </div>

        <div className="justify-self-end">
          <SidebarItem Icon={UserCircleIcon} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-grow max-h-screen overflow-auto">
        <TabPanel />
      </div>
    </div>
  );
}

export default dashboard;
