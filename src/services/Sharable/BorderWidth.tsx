import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import { Slider } from "@/components/ui/slider";
import React from "react";

const BorderWidth = () => {
  const { canvasEditor } = useCanvasHook();
  const onWidthChange = (value: number) => {
    const activeObject = canvasEditor?.getActiveObject();
    if (activeObject) {
      activeObject?.set({
        strokeWidth: value,
      });
      canvasEditor?.renderAll();
    }
  };

  return (
    <div>
      <h2 className="my-2">Border Width</h2>
      <Slider
        defaultValue={[10]}
        max={100}
        step={1}
        onValueChange={(v) => onWidthChange(v[0])}
      />
    </div>
  );
};

export default BorderWidth;
