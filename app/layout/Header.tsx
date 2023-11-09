"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SnowflakeIcon, Sparkles } from "lucide-react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ReloadIcon } from "@radix-ui/react-icons";
type Props = {};

function Header({}: Props) {
  const { userId, isLoaded } = useAuth();
  return (
    <>
      <div className="neo mb-2 px-2 py-4 border-black border flex justify-between rounded-lg mt-4 mx-2 bg-slate-400">
        <Link href="/" className="text-4xl text-black">
          Neo Blog
        </Link>
        <div className="flex flex-row">
          <div className="mt-2 ml-4">
            {!isLoaded ? (
              <>
                <Button disabled>
                  <ReloadIcon className="mr-2 h-2 w-4 animate-spin" />
                  Please wait
                </Button>
              </>
            ) : !userId ? (
              <Button
                asChild
                variant={"destructive"}
                className="transition-all hover:-translate-y-1 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] inset-1"
              >
                <Link href="/sign-in">Sign-in</Link>
              </Button>
            ) : (
              <>
                <div className="flex">
                  <UserButton afterSignOutUrl="/" />
                  <Button asChild className="neo mr-2 ml-3" variant={"outline"}>
                    <Link href={"/blog/new"}>Write a Post</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
