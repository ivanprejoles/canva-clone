import React from "react";
import { StickerList } from "../Option";
import Image from "next/image";
import { FabricImage } from "fabric";
import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";

const Sticker = () => {
  const { canvasEditor } = useCanvasHook();

  const addStickerToCanvas = async (imageUrl: string) => {
    const canvasImageRef = await FabricImage.fromURL(imageUrl, {
      crossOrigin: "anonymous",
    });
    canvasEditor?.add(canvasImageRef);
    canvasEditor?.renderAll();
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold">Stickers</h2>
      <div className="mt-3 grid grid-cols-3 gap-2 p-1 h-auto">
        {StickerList.length > 0 &&
          StickerList.map((sticker, index) => (
            <div
              className="cursor-pointer rounded-md p-1.5 transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 border border-transparent hover:border-gray-200"
              key={index}
              onClick={() => addStickerToCanvas(sticker)}
            >
              <Image
                alt={"Canvas Sticker"}
                src={sticker || "/placeholder.svg"}
                width={300}
                height={300}
                className="h-[60px] w-auto object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sticker;
