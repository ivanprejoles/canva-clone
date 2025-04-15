"use client";

import { sideBarMenu } from "@/services/Option";
import React, { useState } from "react";
import SideBarSettings from "./SideBarSettings";

// type Props = {};

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useState<{
    name: string;
    desc: string;
    component?: React.ReactElement;
    icon: React.ComponentType;
  } | null>(null);

  return (
    <div className="flex h-full">
      <div className="p-2 w-[120px] border-r h-full overflow-y-auto custom-scrollbar pt-2">
        {sideBarMenu.map((menu, index) => (
          <div
            key={index}
            className={`p-2 mb-3 flex flex-col items-center hover:bg-secondary cursor-pointer ${menu.name == selectedOption?.name && "bg-secondary"}`}
            onClick={() => setSelectedOption(menu)}
          >
            <menu.icon />
            <h2 className="mt-1">{menu.name}</h2>
          </div>
        ))}
      </div>
      <SideBarSettings selectedOption={selectedOption} />
    </div>
  );
};

export default SideBar;
