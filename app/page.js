"use client";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import LogoLXT from "./components/logo";
import { OVERVIEW } from "./overview/data";
import Image from "next/image";
import About from "./about";
import Contact from "./contact";
import NonProfit from "./nonprofit";
import Terms from "./terms";
import Privacy from "./privacy";
//import { DynamicBackground } from "../components/background";
import Theme from "./components/theme";
function HomeLeft() {
  return (
    <div className="w-full m-h-screen md:w-1/2 bg-base-200 overflow-hidden relative justify-between mx-auto svg-about">
      <div className="top-0 left-0 bottom-0 p-8 flex flex-col">
        <div className="flex items-center gap-2 mb-4 z-10">
          <Theme />
        </div>

        <div className="mx-auto">
          <LogoLXT size={48} padding={0} />
        </div>
        <h1 className="text-3xl font-bold text-primary uppercase mt-8 text-center">
          <ViewTransition name="hero-intro">Lexington Tech</ViewTransition>
        </h1>

        <div className="flex items-center gap-2 my-4 z-10 mx-auto text-center">
          <ViewTransition name="sticker-icon">
            <Link href="/overview">
              <span className="btn btn-ghost text-2xl font-bold uppercase">
                Overview
              </span>
            </Link>
          </ViewTransition>
        </div>
        <div className="flex flex-col px-4">
          <div className="grid grid-flow-col gap-4 text-xs">
            {/*ABOUT*/}
            <MODALABOUT />
            {/*CONTACT*/}
            <MODALCONTACT />
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="divider divider-secondary">
            <div className="grid grid-flow-col gap-4 text-xs">
              {/*NONPROFIT*/}
              <MODALNONPROFIT />
              {/*TERMS*/}
              <MODALTERMS />
              {/*PRIVACY*/}
              <MODALPRIVACY />
            </div>
          </div>

          <div className="footer footer-center p-2 flex-nowrap grow">
            <div className="font-semibold px-4">
              © LEXINGTON TECH LLC {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ViewTransition name="home-left">
        <HomeLeft />
      </ViewTransition>

      <ViewTransition name="home-right">
        <div className="w-full md:w-1/2 p-2 md:p-8 bg-secondary">
          <h2 className="text-2xl font-bold uppercase text-base-100 p-2 text-pretty">
            Business & Technology Management Consulting
          </h2>
          <div className="space-y-4 flex gap-8 p-2 flex-wrap">
            {OVERVIEW.map((overview) => (
              <Link
                key={overview.id}
                href={`/overview/${overview.slug}`}
                className="transition-colors w-full md:w-[300px] h-[300px] items-stretch"
              >
                <div className="relative w-full h-full flex-shrink-0 overflow-clip rounded-lg group">
                  <ViewTransition name={`overview-image-${overview.slug}`}>
                    <Image
                      loading="eager"
                      decoding="sync"
                      src={overview.image || ""}
                      alt={overview.name}
                      fill
                      className="object-cover flex-1 transition-transform overflow-clip rounded-lg group-hover:scale-110"
                    />
                  </ViewTransition>
                  {/* name label */}
                  <ViewTransition name={`overview-name-${overview.slug}`}>
                    <div className="uppercase absolute bottom-4 right-4 text-secondary bg-opacity-50 rounded-xl text-2xl font-bold filter [text-shadow:0px_0px_8px_#111]">
                      {overview.name}
                    </div>
                  </ViewTransition>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}

function MODALABOUT() {
  return (
    <>
      <button
        className="btn btn-ghost hover:none"
        onClick={() => document.getElementById("modal_about").showModal()}
      >
        ABOUT
      </button>
      <dialog id="modal_about" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <About />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
function MODALCONTACT() {
  return (
    <>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById("modal_contact").showModal()}
      >
        CONTACT
      </button>
      <dialog id="modal_contact" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <Contact />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
function MODALNONPROFIT() {
  return (
    <>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById("modal_nonprofit").showModal()}
      >
        NONPROFIT
      </button>
      <dialog id="modal_nonprofit" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <NonProfit />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
function MODALTERMS() {
  return (
    <>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById("modal_terms").showModal()}
      >
        TERMS
      </button>
      <dialog id="modal_terms" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <Terms />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
function MODALPRIVACY() {
  return (
    <>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById("modal_privacy").showModal()}
      >
        PRIVACY
      </button>
      <dialog id="modal_privacy" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <Privacy />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
