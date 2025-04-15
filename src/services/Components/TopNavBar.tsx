import React, { useEffect, useState } from "react";
import ShapesSetting from "../Sharable/ShapesSetting";
import { useCanvasHook } from "@/hooks/useCanvasHook";
import TextSettingsNavbar from "./TextSettingsNavbar";

const TopNavBar = () => {
  const { canvasEditor } = useCanvasHook();
  const [showShapeSettings, setShowShapeSettings] = useState(false);
  const [enableTextSettings, setEnableTextSettings] = useState(false);

  useEffect(() => {
    if (canvasEditor) {
      const activeObject = canvasEditor.getActiveObject();
      console.log(activeObject, canvasEditor);
    }
  }, [canvasEditor]);

  if (canvasEditor) {
    canvasEditor.on("selection:created", function (e) {
      console.log("Selected Element", e);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const activeObject: any = canvasEditor.getActiveObject();
      if (!activeObject?.text) {
        setShowShapeSettings(true);
        setEnableTextSettings(false);
      }
      if (activeObject?.text) {
        setShowShapeSettings(false);
        setEnableTextSettings(true);
      }
    });

    canvasEditor.on("selection:updated", function () {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const activeObject: any = canvasEditor.getActiveObject();
      if (!activeObject?.text) {
        setShowShapeSettings(true);
        setEnableTextSettings(false);
      }
      if (activeObject?.text) {
        setShowShapeSettings(false);
        setEnableTextSettings(true);
      }
    });

    canvasEditor.on("selection:cleared", function () {
      setShowShapeSettings(false);
      setEnableTextSettings(false);
    });
  }

  return (
    <div className="p-3 bg-white">
      {showShapeSettings && <ShapesSetting />}
      {enableTextSettings && <TextSettingsNavbar />}
    </div>
  );
};

export default TopNavBar;
