import PreTemplateList from "@/components/global/Workspace/PreTemplateList";
import Image from "next/image";
import React from "react";

const Template = () => {
  return (
    <div className="p-10 w-full flex-1 min-h-0 overflow-y-auto">
      <div className="relative">
        <Image
          src={"/banner-home.png"}
          alt="banner"
          width={1800}
          height={300}
          className="w-full h-[200px] rounded-2xl object-cover"
        />
        <h2 className="text-3xl absolute bottom-5 left-10 text-white">
          Templates
        </h2>
      </div>
      <PreTemplateList />
    </div>
  );
};

export default Template;
