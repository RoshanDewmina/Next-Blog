import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <section className="neo bg-slate-100 rounded-lg mx-2 grid :grid-cols-1 sm:grid-cols-12 justify-between ">
        <div className="col-span-7 w-full text-center sm:text-left justify-self-start">
          <h1 className="text-2xl sm:text-4xl md:text-6xl md:leading-normal">
            Tech News for Busy Peeps
          </h1>
          <Button className="ml-80 flex-autotransition-all hover:-translate-y-1 text-white bg-indigo-500 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
            Get Started
          </Button>
        </div>
        <div className="col-span-5 place-self-center">
          <Image
            src={"/Dog call.svg"}
            width={500}
            height={500}
            alt="Walking"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
