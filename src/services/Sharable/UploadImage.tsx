import React, { useState } from "react";
import ImageKit from "imagekit";
import { useParams } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { FabricImage } from "fabric";
import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";

const UploadImage = () => {
  const { designId } = useParams();
  const [loading, setLoading] = useState(false);
  const { canvasEditor } = useCanvasHook();

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY as string,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
  });

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const onFileUpload = async (event: FileUploadEvent): Promise<void> => {
    setLoading(true);
    const file: File = event.target.files[0];

    const fileBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

    const imageRef = await imagekit.upload({
      file: fileBase64,
      fileName: designId + ".png",
      isPublished: true,
    });

    const canvasImageRef = await FabricImage.fromURL(imageRef.url, {
      crossOrigin: "anonymous",
    });

    canvasEditor?.add(canvasImageRef);
    // canvasEditor?.renderAll();

    setLoading(false);
  };

  return (
    <div>
      <div>
        <label htmlFor="uploadImage">
          <h2 className="p-2 bg-primary text-white rounded-md text-cente text-sm cursor-pointer transition-all hover:scale-105 active:scale-95">
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              "Upload Image"
            )}
          </h2>
        </label>
      </div>
      <input
        type="file"
        id="uploadImage"
        className="hidden"
        multiple={false}
        onChange={onFileUpload}
      />
    </div>
  );
};

export default UploadImage;
