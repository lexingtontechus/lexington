"use client";

import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { OVERVIEW } from "./data";
//import { DynamicBackground } from "@/components/ui/dynamic-background"
import LogoLXT from "../components/logo";

function HomeLeft() {
  return (
    <div className="w-full m-h-screen md:w-[120px] relative overflow-hidden">
      <div className="md:w-[120px] md:fixed top-0 left-0 right-0 bottom-0 p-4 pt-[80px] flex flex-col items-center overflow-hidden">
        {/*      <DynamicBackground className="transform -translate-y-[50px] md:translate-y-[100px]" />*/}
        <div className="flex items-center z-0 ">
          <div className="flex items-center">
            {/* sticker icon */}
            <ViewTransition name="overview">
              <Link href="/">
                <LogoLXT className="swap-off" size={12} padding={0} />
              </Link>
            </ViewTransition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row md:min-h-screen">
      {/* Left Section */}
      <ViewTransition name="home-left">
        <HomeLeft />
      </ViewTransition>

      {/* Right Section */}
      <ViewTransition name="home-right">
        <div className="w-full p-2 md:w-4/5 md:p-8">
          <h2 className="text-xl font-medium mx-2 my-4">Lexington Tech</h2>
          <div className="space-y-4">
            {OVERVIEW.map((overview) => (
              <Link
                key={overview.id}
                href={`/card/${overview.slug}`}
                className="flex gap-4 p-2 transition-colors"
              >
                <ViewTransition name={`overview-image-${overview.slug}`}>
                  <div className="relative w-30 h-30 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      loading="eager"
                      decoding="sync"
                      src={overview.image}
                      alt={overview.name}
                      fill
                      className="object-cover transition-transform hover:scale-110"
                    />
                  </div>
                </ViewTransition>
                <div>
                  <h3 className="font-medium">{overview.name}</h3>
                  <span className="text-sm">{overview.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}
