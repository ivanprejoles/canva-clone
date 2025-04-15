import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useMutation } from "convex/react";
import React, { useContext, useState } from "react";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const CustomCanvasDialog = ({ children }: Props) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const userDetailContext = useContext(UserDetailContext);
  if (!userDetailContext) {
    throw new Error("UserDetailContext is not provided.");
  }
  const { userDetail } = userDetailContext;

  const createDesignRecord = useMutation(api.design.createNewDesign);

  const onCreate = async () => {
    toast("Loading....");
    setLoading(true);
    const result = await createDesignRecord({
      name: name,
      width: Number(width),
      height: Number(height),
      uid: userDetail?._id as Id<"users">,
    });
    setLoading(false);
    router.push("/design/" + result);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Custom Canvas</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="text-sm"> Provide Canvas Width and Height.</h2>
              <div className="mt-5">
                <label>Design Name</label>
                <Input
                  placeholder="Design Name"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={name}
                />
                <div className="mt-5 flex gap-5 w-full">
                  <div className="w-full">
                    <label>Width</label>
                    <Input
                      className="mt-1"
                      type="number"
                      placeholder={"500"}
                      onChange={(e) => setWidth(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="w-full">
                    <label>Height</label>
                    <Input
                      className="mt-1"
                      type="number"
                      placeholder="500"
                      onChange={(e) => setHeight(parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  disabled={loading || name.length < 1 || !width || !height}
                  className={`w-full ${!loading && "cursor-pointer"}`}
                  onClick={onCreate}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    "Create"
                  )}
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomCanvasDialog;
