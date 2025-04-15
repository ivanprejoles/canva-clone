import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// type Props = {};

const WorkspaceHeader = () => {
  return (
    <div className="p-2 px-5 justify-between flex items-center shadow-sm h-14">
      <Link href={"/workspace"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={200}
          className="w-[100px] h-[40px]"
        />
      </Link>
      <UserButton />
    </div>
  );
};

export default WorkspaceHeader;
