"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CustomCanvasDialog from "./CustomCanvasDialog";
import { useConvex } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { UserDetailContext } from "@/context/UserDetailContext";
import { Id } from "../../../../convex/_generated/dataModel";
import { designListType } from "@/types";
import { useRouter } from "next/navigation";

// type Props = {};

const RecentDesign = () => {
  const [designList, setDesignList] = useState<designListType[]>([]);
  const userDetailContext = useContext(UserDetailContext);
  const convex = useConvex();
  const router = useRouter();

  if (!userDetailContext) {
    throw new Error(
      "UserDetailContext is undefined. Ensure it is properly provided."
    );
  }
  const { userDetail } = userDetailContext;

  useEffect(() => {
    if (userDetail) {
      GetRecentDesings();
    }
  }, [userDetail]);

  const GetRecentDesings = async () => {
    const result = await convex.query(api.design.GetUserDesigns, {
      uid: userDetail?._id as Id<"users">,
    });

    console.log(result);
    setDesignList(result);
  };

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl">Recent Designs</h2>
      {designList.length == 0 ? (
        <div className="flex flex-col gap-4 items-center mt-5">
          <Image src={"/edittool.png"} alt="edit" width={100} height={100} />
          <h2 className="text-center">
            You don&apos;t have design created, Create New one!
          </h2>
          <CustomCanvasDialog>
            <Button className="cursor-pointer">+ Create New</Button>
          </CustomCanvasDialog>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
          {designList.map((design, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 active:shadow-sm cursor-pointer border border-transparent hover:border-gray-200"
              onClick={() => router.push("/design/" + design._id)}
            >
              <div className="relative">
                <Image
                  width={300}
                  height={300}
                  className="w-full h-[200px] object-contain rounded-lg"
                  src={(design.imagePreview as string) || "/no_content.jpg"}
                  alt={design.name}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity duration-200 rounded-lg"></div>

                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-xs py-1 px-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View design
                </div>
              </div>

              {design.name && (
                <div className="p-2 text-sm font-medium">{design.name}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentDesign;
