import React from "react";
import { FontFamilyList } from "../Option";
import { useCanvasHook } from "@/hooks/useCanvasHook";

const FontFamily = () => {
  const { canvasEditor } = useCanvasHook();
  const onFontFamilyChange = (value: string) => {
    const activeObject = canvasEditor?.getActiveObject();
    if (activeObject) {
      activeObject.set({
        fontFamily: value,
      });
      canvasEditor?.renderAll();
    }
  };

  return (
    <div className="h-[200px] overflow-y-auto custom-scrollbar pr-1">
      {FontFamilyList.map((font, index) => (
        <h2
          key={index}
          className="cursor-pointer transition-all duration-150 mb-2"
          onClick={() => onFontFamilyChange(font)}
        >
          <div
            className="p-2 bg-secondary hover:bg-secondary/80 active:bg-secondary/90 rounded-lg border border-transparent hover:border-gray-300 flex items-center"
            style={{
              fontFamily: font,
            }}

          >
            <h2 className="text-lg">{font}</h2>
            <div className="ml-auto opacity-0 hover:opacity-100 text-xs text-gray-500">
              Click to select
            </div>
          </div>
        </h2>
      ))}
    </div>
  );
};

export default FontFamily;
