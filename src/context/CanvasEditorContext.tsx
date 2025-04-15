import { CanvasDetailContextType } from "@/types";
import { createContext } from "react";

export const CanvasContext = createContext<CanvasDetailContextType | undefined>(
  undefined
);
