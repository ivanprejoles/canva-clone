import IntroOptions from "@/components/global/Workspace/IntroOptions";
import RecentDesign from "@/components/global/Workspace/RecentDesign";
import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";
import React from "react";

// type Props = {};

const Workspace = async () => {
  const user = await stackServerApp.getUser();

  if (!user) {
    redirect("/handler/sign-in"); // 🔁 Server-side redirect
  }

  return (
    <div className="p-10 w-full flex-1 min-h-0 overflow-y-auto">
      <IntroOptions />
      <RecentDesign />
    </div>
  );
};

export default Workspace;
