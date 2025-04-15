import React, { useState } from "react";
import { AITransformationSettings } from "../Option";
import Image from "next/image";
import CustomImageUpload from "../Sharable/CustomImageUpload";

const AiTransformSetting = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedAi, setSelectedAi] = useState<any>();

  return (
    <div className="h-[80vh]">
      <CustomImageUpload selectedAi={selectedAi} />
      <h2 className="my-2 text-xs font-bold">
        AI Transformation By ImageKit.io
      </h2>
      <div className="mt-3 grid grid-cols-2 gap-3 overflow-auto p-1 custom-scrollbar">
        {AITransformationSettings.map((option, index) => (
          <div className="" key={index} onClick={() => setSelectedAi(option)}>
            <Image
              src={option.image}
              alt={option.name}
              width={500}
              height={500}
              className="w-full h-[70px] object-cover rounded-xl"
            />
            <h2 className="text-xs text-center">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTransformSetting;
