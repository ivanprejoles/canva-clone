import React from "react";
import { Id } from "../../convex/_generated/dataModel";
import { Canvas } from "fabric";

export type userType = {
  _id: Id<"users">;
  _creationTime: number;
  subscriptionId?: string;
  name: string;
  email: string;
  picture: string;
} | null;

export type designType =
  | {
      _id: Id<"designs">;
      _creationTime: number;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jsonTemplate?: any;
      imagePreview?: string | undefined;
      name: string;
      width: number;
      height: number;
      uid: Id<"users">;
    }
  | null
  | undefined;

export type UserDetailContextType = {
  userDetail: userType;
  setUserDetail: React.Dispatch<React.SetStateAction<userType>>;
};

export type CanvasDetailContextType = {
  canvasEditor: Canvas | null;
  setCanvasEditor: React.Dispatch<React.SetStateAction<Canvas | null>>;
};

export type optionType = {
  name: string;
  width: number;
  height: number;
  icon: string;
};

export type designListType = {
  _id: Id<"designs">;
  _creationTime: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonTemplate?: any;
  imagePreview?: string | undefined;
  name: string;
  width: number;
  height: number;
  uid: Id<"users">;
};

export type templateListType = {
  _id: Id<"templates">;
  _creationTime: number;
  name: string;
  imagePreview: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonData: any;
  active: boolean;
  height?: number | undefined;
  width?: number | undefined;
};
