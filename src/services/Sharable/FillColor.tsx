import React, { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";
import { useCanvasHook } from "@/hooks/useCanvasHook";

const FillColor = () => {
  const [color, setColor] = useState("#000");
  const { canvasEditor } = useCanvasHook();
  const onColorChange = (color: string) => {
    setColor(color);
    const activeObject = canvasEditor?.getActiveObject();
    activeObject?.set({
      fill: color,
    });
    canvasEditor?.renderAll();
  };
  return (
    <div>
      <h2 className="my-2">Fill Color</h2>
      <ColorPickerEditor
        onColorChange={(v) => onColorChange(v)}
        value={color}
      />
    </div>
  );
};

export default FillColor;
