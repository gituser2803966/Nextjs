import React from "react";
import { useRouter } from "next/router";

import SidebarItem from "../components/SidebarItem";
import {
  BeakerIcon,
  HomeIcon,
  DatabaseIcon,
  ChartSquareBarIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

import { UserCircleIcon } from "@heroicons/react/solid";
import { route } from "next/dist/server/router";

function Sidebar() {
  route = useRouter();
  const goToPage = (page) => {
    route.push("/" + page);
  };

  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="flex bg-indigo-400 flex-col items-center justify-between py-2">
        <div className="flex flex-col px-3 ">
          <div className="flex">
            <SidebarItem Icon={HomeIcon} />
          </div>
          <div className="mt-5">
            <button onClick={() => goToPage("data")}>
              <SidebarItem Icon={DatabaseIcon} />
            </button>
            <SidebarItem Icon={ChartSquareBarIcon} />
            <SidebarItem Icon={BeakerIcon} />
            <button onClick={() => goToPage("timeline")}>
              <SidebarItem Icon={CalendarIcon} />
            </button>
          </div>
        </div>

        <div className="justify-self-end">
          <SidebarItem Icon={UserCircleIcon} />
        </div>
      </div>
      {/* content */}
      {/* <div className="flex flex-grow max-h-screen overflow-auto">
        <TabPanel />
      </div> */}
    </div>
  );
}

export default Sidebar;
