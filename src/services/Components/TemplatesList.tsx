"use client";

import { useConvex } from "convex/react";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import { useCanvasHook } from "@/hooks/useCanvasHook";
import { designListType } from "@/types";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useRouter } from "next/navigation";
import { Id } from "../../../convex/_generated/dataModel";

const TemplatesList = () => {
  const { canvasEditor } = useCanvasHook();
  const [templateList, setTemplateList] = useState<designListType[]>([]);
  const convex = useConvex();
  const userDetailContext = useContext(UserDetailContext);
  const router = useRouter();

  if (!userDetailContext) {
    throw new Error(
      "UserDetailContext is undefined. Ensure it is properly provided."
    );
  }

  const { userDetail } = userDetailContext;

  useEffect(() => {
    if (userDetail) {
      fetchTemplates();
    } else {
      router.push("/handler/sign-in ");
    }
  }, [userDetail]);

  const fetchTemplates = async () => {
    const result = await convex.query(api.design.GetUserDesigns, {
      uid: userDetail?._id as Id<"users">,
    });
    setTemplateList(result);
  };

  const onTemplateSelect = (template: designListType) => {
    if (canvasEditor) {
      canvasEditor.loadFromJSON(template.jsonTemplate, () => {
        canvasEditor.requestRenderAll();
      });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {templateList.map((template, index) => (
          <Image
            key={index}
            onClick={() => onTemplateSelect(template)}
            src={(template.imagePreview as string) || "/no_content.jpg"}
            alt={template.name}
            width={500}
            height={500}
            className="w-full h-[150px] rounded-lg object-contain bg-secondary cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesList;
