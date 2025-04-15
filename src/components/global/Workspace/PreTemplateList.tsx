"use client";

import { useConvex, useMutation } from "convex/react";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../../../convex/_generated/api";
import Image from "next/image";
import { designListType } from "@/types";
import { UserDetailContext } from "@/context/UserDetailContext";
import { Id } from "../../../../convex/_generated/dataModel";
import { useRouter } from "next/navigation";

const PreTemplateList = () => {
  const [templateList, setTemplateList] = useState<designListType[]>([]);
  const convex = useConvex();
  const userDetailContext = useContext(UserDetailContext);
  const createNewDesignFromTemplate = useMutation(
    api.design.CreateDesignFromTemplate
  );
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

  const onTemplateSelect = async (template: designListType) => {
    const id = await createNewDesignFromTemplate({
      imagePreview: template.imagePreview as string,
      jsonTemplate: template.jsonTemplate,
      name: template.name,
      uid: userDetail?._id as Id<"users">,
      width: template.width as number,
      height: template.height as number,
    });

    router.push("/design/" + id);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
        {templateList.map((template, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg"
            onClick={() => onTemplateSelect(template)}
          >
            <Image
              width={300}
              height={300}
              className="w-full h-[200px] object-contain rounded-lg cursor-pointer"
              src={(template.imagePreview as string) || "/no_content.jpg"}
              alt={template.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreTemplateList;
