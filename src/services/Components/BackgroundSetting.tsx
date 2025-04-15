import React, { useState } from "react";
import ColorPickerEditor from "../Sharable/ColorPickerEditor";
import { useCanvasHook } from "@/hooks/useCanvasHook";

const BackgroundSetting = () => {
  const [bgColor, setBgColor] = useState("#fff");
  const { canvasEditor } = useCanvasHook();
  //   Use to change the canvas color
  const onColorChange = (color: string) => {
    setBgColor(color);
    canvasEditor?.set({
      backgroundColor: color,
      backroundImage: null,
    });
    canvasEditor?.renderAll();
  };
  return (
    <div>
      <ColorPickerEditor
        value={bgColor}
        onColorChange={(v: string) => onColorChange(v)}
      />
    </div>
  );
};

export default BackgroundSetting;
