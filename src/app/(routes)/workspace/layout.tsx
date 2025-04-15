import Sidebar from "@/components/global/Workspace/Sidebar";
import WorkspaceHeader from "@/components/global/Workspace/WorkspaceHeader";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const WorkspaceLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <WorkspaceHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
