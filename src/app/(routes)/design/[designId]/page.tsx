"use client";

import DesignHeader from "@/components/global/Designs/DesignHeader";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import SideBar from "@/components/global/Designs/SideBar";
import CanvasEditor from "@/components/global/Designs/CanvasEditor";
import { CanvasContext } from "@/context/CanvasEditorContext";
import { Canvas } from "fabric";
import { UserDetailContext } from "@/context/UserDetailContext";

// type Props = {};

const DesignEditor = () => {
  const { designId } = useParams();
  const userDetailContext = useContext(UserDetailContext);
  const [canvasEditor, setCanvasEditor] = useState<Canvas | null>(null);
  const router = useRouter();
  const DesignInfo = useQuery(api.design.GetDesign, {
    id: designId as Id<"designs">,
  });

  if (!userDetailContext) {
    throw new Error(
      "UserDetailContext is undefined. Ensure it is properly provided."
    );
  }

  const { userDetail } = userDetailContext;

  useEffect(() => {
    if (!userDetail) {
      router.push("/handler/sign-in ");
    }
  }, [userDetail]);

  return (
    <div className="w-full h-full flex flex-col">
      <CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
        <DesignHeader DesignInfo={DesignInfo} />
        <div className="flex flex-1 overflow-hidden">
          <SideBar />
          <CanvasEditor DesignInfo={DesignInfo} />
        </div>
      </CanvasContext.Provider>
    </div>
  );
};

export default DesignEditor;
