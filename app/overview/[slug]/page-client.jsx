"use client";

import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
//import { type overview } from '@/app/utils/constants'

export default function overview({ overview, overviews }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="min-h-screen flex items-center justify-center flex-col md:flex-row w-full px-0 md:px-8 mb-8">
        <div className="relative w-full sm:w-auto group">
          <ViewTransition name="overview">
            <Link
              href="/overview"
              className="absolute top-4 left-4 text-secondary z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 p-1 mask mask-circle stroke-2 stroke-base-100 bg-secondary"
                fill="none"
                viewBox="0 0 24 24"
                //stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          </ViewTransition>

          <ViewTransition name={`overview-image-main`}>
            <div className="relative md:rounded-lg overflow-clip transition-all duration-300 ease-in-out cursor-pointer w-full y-full md:w-[70vw] h-[70vh]">
              <Image
                loading="eager"
                decoding="sync"
                src={overview.image}
                alt={overview.name}
                fill
                className="object-cover overflow-clip md:rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 opacity-50"
              />
            </div>
          </ViewTransition>

          <ViewTransition name="overview-name">
            <div className="absolute w-full h-full inset-0 md:rounded-lg overflow-clip transition-all duration-300 ease-out filter drop-shadow-[2px_2px_12px_#333]">
              <div className="absolute bottom-4 left-4 text-accent-content bg-opacity-20 rounded-xl text-3xl drop-shadow-xs p-4">
                <h1 className="mb-5 text-3xl font-bold uppercase text-accent">
                  {overview.name} - {overview.header}
                </h1>
                <p className="mb-5 text-xl font-semibold text-primary">
                  {overview.subheader}
                </p>
                <p className="mb-5 text-sm font-semibold text-primary">
                  {overview.description}
                </p>
                {/* {overview.content.map((content) => (
                  <div key={overview.id} className="my-2">
                    <p className="text-lg font-semibold text-primary">
                      {content.title}
                    </p>
                    <p className="text-sm text-primary">
                      {content.description}
                    </p>
                  </div>
                ))}
              */}
              </div>
            </div>
          </ViewTransition>
        </div>

        <ViewTransition name="right-side-bar">
          <div className="w-full my-8 p-2 md:w-auto md:ml-8 md:p-8">
            <h3 className="uppercase sm:block text-xl font-medium mb-6">
              Lexington Overview
            </h3>
            <div className="space-y-4">
              {overviews.map((overview) => (
                <Link
                  key={overview.id}
                  href={`/overview/${overview.slug}`}
                  className="flex items-center gap-4 p-2 transition-colors"
                >
                  <div className="relative w-20 h-20 shrink-0">
                    <ViewTransition name={`overview-image-${overview.slug}`}>
                      <Image
                        loading="eager"
                        decoding="sync"
                        src={overview.image}
                        alt={overview.name}
                        fill
                        className="bg-opacity-50 object-cover transition-transform filter hover:scale-105 overflow-hidden rounded-lg flex-1"
                      />
                      {/* name label */}
                    </ViewTransition>
                  </div>
                  <div className="text-secondary font-bold rounded-xl md:text-sm">
                    {overview.name}
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
    </div>
  );
}
