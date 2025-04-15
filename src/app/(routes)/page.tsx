// app/page.tsx or app/somepage/page.tsx

import { stackServerApp } from "@/stack";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await stackServerApp.getUser();

  if (!user) {
    redirect("/handler/sign-in ");
  } else {
    redirect("/workspace"); // or `/workspace/${user.id}` or similar if dynamic
  }

  return (
    <div className="">
      <Loader className="animate-spin" />
      Redirecting...
    </div>
  ); // fallback in case both redirects fail
};

export default Page;
