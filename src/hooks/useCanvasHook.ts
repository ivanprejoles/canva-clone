import { CanvasContext } from "@/context/CanvasEditorContext";
import { useContext } from "react";

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);

  if (!context) {
    throw new Error("Error");
  }
  return context;
};
