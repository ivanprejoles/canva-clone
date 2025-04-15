/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import React from "react";

const FontStyles = () => {
  const { canvasEditor } = useCanvasHook();
  const activeObject: any = canvasEditor?.getActiveObject();
  const onSettingClick = (type: string) => {
    const activeObject: any = canvasEditor?.getActiveObject();
    if (activeObject) {
      if (type == "bold") {
        activeObject.set({
          fontWeight: activeObject?.fontWeight == "bold" ? "normal" : "bold",
        });
      }
      if (type == "italic") {
        activeObject.set({
          fontStyle: activeObject?.fontStyle == "italic" ? "normal" : "italic",
        });
      }
      if (type == "underline") {
        activeObject.set({
          underline: activeObject.underline ? false : true,
        });
      }

      canvasEditor?.add(activeObject);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <Toggle
        aria-label="Toggle bold"
        defaultPressed={activeObject?.fontWeight == "bold"}
        onClick={() => onSettingClick("bold")}
      >
        <Bold className="h-4 w-4" size={"lg"} />
      </Toggle>
      <Toggle
        aria-label="Toggle italic"
        defaultPressed={activeObject?.fontStyle == "italic"}
        onClick={() => onSettingClick("italic")}
      >
        <Italic className="h-4 w-4" size={"lg"} />
      </Toggle>
      <Toggle
        aria-label="Toggle underline"
        defaultPressed={activeObject?.underline}
        onClick={() => onSettingClick("underline")}
      >
        <Underline className="h-4 w-4" size={"lg"} />
      </Toggle>
    </div>
  );
};

export default FontStyles;
