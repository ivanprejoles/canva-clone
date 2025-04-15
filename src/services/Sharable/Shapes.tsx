import React from "react";
import { ShapeList } from "../Option";
import Image from "next/image";
import { Circle, Line, Rect, Triangle } from "fabric";
import { useCanvasHook } from "@/hooks/useCanvasHook"; 

const Shapes = () => {
  const { canvasEditor } = useCanvasHook();

  const onShapeSelect = (shape: { name: string; icon?: string }) => {
    const properties = {
      left: 100,
      top: 100,
      radius: 50,
      fill: "black",
      stroke: "black",
      width: 80,
      height: 80,
      strokeWidth: 10,
    };
    if (shape.name == "Circle") {
      const circleRef = new Circle({
        ...properties,
      });
      canvasEditor?.add(circleRef);
    } else if (shape.name == "Square") {
      const squareRef = new Rect({
        ...properties,
      });
      canvasEditor?.add(squareRef);
    } else if (shape.name == "Triangle") {
      const triangleRef = new Triangle({
        ...properties,
      });
      canvasEditor?.add(triangleRef);
    } else if (shape.name == "Line") {
      const squareRef = new Line([50, 50, 200, 200], {
        stroke: "black",
        strokeWidth: 5,
      });
      canvasEditor?.add(squareRef);
    }
    canvasEditor?.renderAll();
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {ShapeList.map((shape, index) => (
          <div
            className="flex items-center justify-center p-2 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer active:scale-95"
            key={index}
            onClick={() => onShapeSelect(shape)}
          >
            <Image
              src={shape.icon || "/placeholder.svg"}
              alt={shape.name}
              width={100}
              height={100}
              className="w-full h-auto object-contain p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shapes;
