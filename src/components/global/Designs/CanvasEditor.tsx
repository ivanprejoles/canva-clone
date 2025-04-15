import { useCanvasHook } from "@/hooks/useCanvasHook";
import TopNavBar from "@/services/Components/TopNavBar";
import { designType } from "@/types";
import { Canvas } from "fabric";
import React, { useEffect, useRef } from "react";

type Props = {
  DesignInfo: designType;
};

const CanvasEditor = ({ DesignInfo }: Props) => {
  const canvasRef = useRef(null);
  // const [canvas, setCanvas] = useState<Canvas | null>(null);
  const { canvasEditor, setCanvasEditor } = useCanvasHook();

  // Used to Init the Canvas with default width and height
  useEffect(() => {
    if (canvasRef.current && DesignInfo) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: (DesignInfo?.width as number) / 1.3,
        height: (DesignInfo?.height as number) / 1.3,
        backgroundColor: "#ffffff",
        preserveObjectStacking: true,
        controlsAboveOverlay: true,
      });

      //   set High Resolution Canvas
      const scaleFactor = window.devicePixelRatio || 1;

      initCanvas.set({
        width: (DesignInfo?.width as number) * scaleFactor,
        height: (DesignInfo?.height as number) * scaleFactor,
        zoom: 1 / scaleFactor,
      });

      if (DesignInfo.jsonTemplate) {
        initCanvas.loadFromJSON(DesignInfo.jsonTemplate, () => {
          initCanvas.requestRenderAll();
        });
      }

      initCanvas.renderAll();

      setCanvasEditor(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, [DesignInfo]);

  // Used to Delete the selected Element/Object
  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key == "Backspace") {
        if (canvasEditor) {
          const activeObject = canvasEditor.getActiveObject();
          if (activeObject) {
            canvasEditor.remove(activeObject);
            canvasEditor.renderAll();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvasEditor]);

  return (
    <div className="bg-secondary w-full h-screen flex-1 min-h-0 overflow-auto">
      <TopNavBar />
      <div className="flex mt-10 overflow-x-auto items-center justify-center flex-col relative flex-1">
        <canvas id="canvas" className="absolute" ref={canvasRef} />
      </div>
    </div>
  );
};

export default CanvasEditor;
