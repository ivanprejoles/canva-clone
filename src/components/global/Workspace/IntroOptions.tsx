"use client";

import { canvasSizeOptions } from "@/services/Option";
import { useMutation } from "convex/react";
import Image from "next/image";
import React, { useContext } from "react";
import { api } from "../../../../convex/_generated/api";
import { optionType } from "@/types";
import { UserDetailContext } from "@/context/UserDetailContext";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";
import { useRouter } from "next/navigation";

// type Props = {};

const IntroOptions = () => {
  const createDesignRecord = useMutation(api.design.createNewDesign);
  const userDetailContext = useContext(UserDetailContext);
  const router = useRouter();

  if (!userDetailContext) {
    throw new Error("UserDetailContext is not provided");
  }

  const { userDetail } = userDetailContext;

  const OnCanvasOptionSelect = async (option: optionType) => {
    toast("Loading....");
    const result = await createDesignRecord({
      name: option.name,
      width: option.width,
      height: option.height,
      uid: userDetail?._id as Id<"users">,
    });

    router.push("/design/" + result);
  };

  return (
    <div className="">
      <div className="relative">
        <Image
          src={"/banner-home.png"}
          alt="banner"
          width={1800}
          height={300}
          className="w-full h-[200px] rounded-2xl object-cover"
        />
        <h2 className="text-3xl absolute bottom-5 left-10 text-white">
          Workspace
        </h2>
      </div>
      <div className="flex gap-6 items-center mt-10 justify-center">
        {canvasSizeOptions.map((option, index) => (
          <div
            className="flex flex-col items-center cursor-pointer"
            key={index}
            onClick={() => OnCanvasOptionSelect(option)}
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={60}
              height={60}
              className="hover:scale-105 transition-all"
            />
            <h2 className="text-xs mt-2 font-medium text-center">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroOptions;
