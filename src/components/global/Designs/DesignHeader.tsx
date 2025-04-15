import { useCanvasHook } from "@/hooks/useCanvasHook";
import { Button } from "@/components/ui/button";
import { designType } from "@/types";
import { UserButton } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { Download, Save } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { toast } from "sonner";
import ImageKit from "imagekit";
import Link from "next/link";

type Props = {
  DesignInfo: designType;
};

const DesignHeader = ({ DesignInfo }: Props) => {
  const { canvasEditor } = useCanvasHook();
  const { designId } = useParams();
  const SaveDesign = useMutation(api.design.SaveDesign);

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY as string,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
  });

  // Used to Save Design in JSON format in Database
  const onSave = async () => {
    if (canvasEditor) {
      toast("Saved!");
      const base64Image = canvasEditor?.toDataURL({
        format: "png",
        quality: 0.5,
        multiplier: 1,
      });

      const imageRef = await imagekit.upload({
        file: base64Image,
        fileName: designId + ".png",
        isPublished: true,
        useUniqueFileName: false,
      });

      const JsonDesign = canvasEditor.toJSON();

      await SaveDesign({
        id: designId as Id<"designs">,
        jsonDesign: JsonDesign,
        imagePreview: imageRef.url,
      });
    }
  };

  const onExport = () => {
    // Base64 Image
    const dataUrl = canvasEditor?.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 1,
    });

    const link = document.createElement("a");
    link.href = dataUrl as string;
    link.download = "CanvaCloneDesign.png";
    link.click();
  };

  return (
    <div className="p-3 flex justify-between bg-gradient-to-r from-sky-500 via-blue-400 to-purple-600 h-14">
      <Link href={"/workspace"}>
        <Image src={"/logo.png"} alt="logo" width={100} height={60} />
      </Link>
      <input
        placeholder="Design Name"
        className="text-white border-none outline-none"
        defaultValue={DesignInfo?.name}
      />
      <div className="flex gap-5">
        <Button
          onClick={onSave}
          className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer shadow-md transition-all duration-200"
        >
          <Save className="w-4 h-4" />
          Save
        </Button>

        <Button
          onClick={onExport}
          className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 shadow-md transition-all cursor-pointer duration-200"
        >
          <Download className="w-4 h-4" />
          Export
        </Button>

        <UserButton />
      </div>
    </div>
  );
};

export default DesignHeader;
