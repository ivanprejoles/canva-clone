"use client";

import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import React, { useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";
import { UserDetailContext } from "@/context/UserDetailContext";
import { Id } from "../../convex/_generated/dataModel";
import { userType } from "@/types";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const user = useUser();
  const createNewUserMutation = useMutation(api.users.CreateNewUser);
  const [userDetail, setUserDetail] = useState<userType>(null);

  useEffect(() => {
    if (user) {
      createUser();
    }
  }, [user]);

  const createUser = async () => {
    const data = {
      name: (user?.displayName as string) || (user?.primaryEmail as string),
      email: user?.primaryEmail as string,
      picture: user?.profileImageUrl as string,
    };
    const result = await createNewUserMutation({
      ...data,
    });

    if (typeof result === "object" && result !== null && "_id" in result) {
      setUserDetail(
        result as {
          _id: Id<"users">;
          _creationTime: number;
          subscriptionId?: string;
          name: string;
          email: string;
          picture: string;
        }
      );
    } else {
      console.error("Unexpected result format:", result);
    }
  };

  return (
    <div className="w-full h-[100vh] relative">
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
};

export default Provider;
