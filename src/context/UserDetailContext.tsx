import { UserDetailContextType } from "@/types";
import { createContext } from "react";

export const UserDetailContext = createContext<
  UserDetailContextType | undefined
>(undefined);
