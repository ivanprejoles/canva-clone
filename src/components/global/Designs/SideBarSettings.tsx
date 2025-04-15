import React from "react";

type Props = {
  selectedOption: {
    name: string;
    desc: string;
    component?: React.ReactElement;
    icon: React.ComponentType;
  } | null;
};

const SideBarSettings = ({ selectedOption }: Props) => {
  return (
    <div className="w-[280px] p-5 h-full overflow-y-auto custom-scrollbar border-r">
      <h2 className="font-bold">{selectedOption?.name}</h2>
      <p className="text-sm text-gray-500">{selectedOption?.desc}</p>
      <div className="mt-7">{selectedOption?.component}</div>
    </div>
  );
};

export default SideBarSettings;
