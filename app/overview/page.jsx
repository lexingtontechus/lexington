"use client";

import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { OVERVIEW } from "./data";
//import { DynamicBackground } from "@/components/ui/dynamic-background"
import LogoLXT from "../components/logo";
import { BKGAI } from "./assets";
function HomeLeft() {
  return (
    <div className="w-full m-h-screen md:w-[120px] relative overflow-hidden">
      <div className="md:w-[120px] md:fixed top-0 left-0 right-0 bottom-0 p-4 pt-[80px] flex flex-col items-center overflow-hidden">
        <div className="flex items-center gap-2 z-0 ">
          <div className="flex items-center gap-2">
            {/* sticker icon */}
            <ViewTransition name="overview">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {/*
                <LogoLXT className="swap-off" size={12} padding={0} />*/}
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
          <h2 className="text-xl font-bold mx-2 my-4 uppercase">
            Lexington Overview
          </h2>
          <h3 className="text-xl font-medium mx-2 my-4">
            Digital Transformation Through WEB3 Technology Adoption.
          </h3>
          <div className="space-y-4">
            {OVERVIEW.map((overview) => (
              <Link
                key={overview.id}
                href={`/overview/${overview.slug}`}
                className="flex gap-4 p-2 transition-colors"
              >
                <ViewTransition name={`overview-image-${overview.slug}`}>
                  <div className="relative min-h-[96px] min-w-[96px] overflow-hidden rounded-lg flex-shrink-0`)">
                    <Image
                      loading="eager"
                      decoding="sync"
                      src={overview.image}
                      alt={overview.name}
                      fill
                      className=" object-scale-down transition-transform hover:scale-150"
                    />
                  </div>
                </ViewTransition>
                <div className="max-w-4xl">
                  <h3 className="font-bold text-xl">{overview.name}</h3>
                  {overview.mission.map((mission) => (
                    <div key={overview.id} className="my-2">
                      <p className="text-md font-semibold text-primary">
                        {mission.title}
                      </p>
                      <p className="text-sm text-primary">
                        {mission.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="footer footer-center p-2 flex-nowrap grow">
            <div className="uppercase font-semibold px-4">
              © Lexington Tech LLC {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}
