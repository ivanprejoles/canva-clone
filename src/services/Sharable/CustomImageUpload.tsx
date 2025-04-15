import { useCanvasHook } from "@/hooks/useCanvasHook";
import { Button } from "@/components/ui/button";
import { FabricImage } from "fabric";
import ImageKit from "imagekit";
import { ImageUp, Loader } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { selectedAi: any };

const CustomImageUpload = ({ selectedAi }: Props) => {
  const [image, setImage] = useState<string | null>(
    "https://ik.imagekit.io/ikmedia/blue-bmw.jpg"
  );
  const [loading, setLoading] = useState(false);
  const { designId } = useParams();
  const { canvasEditor } = useCanvasHook();

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY as string,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onImageUpload = async (event: any) => {
    console.log("uploaded image");
    setLoading(true);
    const file = event.target.files[0];
    const imageRef = await imagekit.upload({
      file: file,
      fileName: designId + ".png",
      isPublished: true,
    });

    console.log(imageRef.url);
    // const imageUrl = URL.createObjectURL(file);
    setImage(imageRef.url);

    setLoading(false);
  };

  const onAddToCanvas = async () => {
    console.log("added to canvas");
    const canvasImageRef = await FabricImage.fromURL(image!, {
      crossOrigin: "anonymous",
    });

    console.log(canvasImageRef);
    canvasEditor?.add(canvasImageRef);
    setImage(null);
  };

  useEffect(() => {
    try {
      if (selectedAi) {
        let imageUrl = image;
        if (image?.includes("?tr=")) {
          imageUrl = imageUrl + "," + selectedAi.command;
        } else {
          imageUrl = imageUrl + "?tr=" + selectedAi.command;
        }

        setImage(imageUrl);
        console.log(imageUrl);
      }
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  }, [selectedAi]);

  return (
    <div>
      {!image ? (
        <label
          htmlFor="uploadImage"
          className="bg-secondary p-4 flex flex-col items-center justify-center rounded-xl h-[150px] mb-4"
        >
          <ImageUp />
          <h2 className="text-xs">Upload Image</h2>
        </label>
      ) : (
        <label htmlFor="uploadImage">
          <img
            src={image}
            alt="Image"
            width={300}
            height={300}
            className="w-full h-[150px] rounded-lg"
          />
        </label>
      )}
      <input
        type="file"
        id="uploadImage"
        className="hidden"
        onChange={onImageUpload}
      />
      {image && (
        <Button
          disabled={loading}
          onClick={onAddToCanvas}
          className="w-full my-2"
          size="sm"
        >
          {loading ? <Loader className="animate-spin" /> : "Add To Canvas"}
        </Button>
      )}
    </div>
  );
};

export default CustomImageUpload;
