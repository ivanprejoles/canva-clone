import React, { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";
import { useCanvasHook } from "@/hooks/useCanvasHook";

const BorderColor = () => {
  const [color, setColor] = useState("#000");
  const { canvasEditor } = useCanvasHook();
  const onColorChange = (color: string) => {
    setColor(color);
    const activeObject = canvasEditor?.getActiveObject();
    activeObject?.set({
      stroke: color,
    });
    canvasEditor?.renderAll();
  };
  return (
    <div>
      <h2 className="my-2">Border Color</h2>
      <ColorPickerEditor
        onColorChange={(v) => onColorChange(v)}
        value={color}
      />
    </div>
  );
};

export default BorderColor;
