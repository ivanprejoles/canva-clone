import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import { FabricImage } from "fabric";

const SearchImages = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imageList, setImageList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const { canvasEditor } = useCanvasHook();

  useEffect(() => {
    GetImageList("Gradient");
  }, []);

  const GetImageList = async (searchInput: string) => {
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchInput,
        page: 1,
        per_page: 20,
      },
      headers: {
        Authorization:
          `Client-ID ` + process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
      },
    });
    setImageList(result.data.results);
  };

  const addImageToCanvas = async (imageUrl: string) => {
    const canvasImageRef = await FabricImage.fromURL(imageUrl, {
      crossOrigin: "anonymous",
    });
    canvasEditor?.add(canvasImageRef);
    canvasEditor?.renderAll();
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold">Search Images</h2>
      <div className="flex gap-2 items-center my-2">
        <Input
          placeholder="Gradient"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          className="cursor-pointer "
          onClick={() => GetImageList(searchInput)}
        >
          <SearchIcon />
        </Button>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 h-auto p-1">
        {imageList.length > 0 &&
          imageList.map((image, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => addImageToCanvas(image?.urls?.small)}
            >
              <Image
                alt={image.slug}
                src={image?.urls?.thumb}
                width={300}
                height={300}
                className="w-full h-[80px] rounded-sm object-cover transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 border border-transparent hover:border-gray-200"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchImages;
