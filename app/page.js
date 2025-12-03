"use client";
import Link from "next/link";
import { ViewTransition } from "react";
import LogoLXT from "./components/logo";
import { OVERVIEW } from "./overview/data";
import Image from "next/image";
import About from "./components/about";
import Contact from "./components/contact";
import NonProfit from "./components/nonprofit";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
//import { DynamicBackground } from "../components/background";
import Theme from "./components/theme";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ViewTransition name="home-left">
        <HomeLeft />
      </ViewTransition>
    </div>
  );
}

function HomeLeft() {
  return (
    <div className="w-full m-h-screen bg-base-200 overflow-hidden relative justify-between mx-auto svg-about">
      <div className="pt-24 p-8 flex flex-col">
        <About />

        <div className="flex items-center gap-2 z-10 mx-auto text-center pb-4">
          <ViewTransition name="sticker-icon">
            <Link href="/overview">
              <div className="btn btn-ghost btn-neutral text-primary text-2xl font-bold uppercase">
                Overview
              </div>
            </Link>
          </ViewTransition>
        </div>
        <div className="flex flex-col px-4">
          <div className="grid grid-flow-col gap-4">
            {/*CONTACT*/}
            <MODALCONTACT />
            {/*NONPROFIT*/}
            <MODALNONPROFIT />
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="divider divider-secondary">
            <div className="grid grid-flow-col gap-4">
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

function MODALABOUT() {
  return (
    <>
      <button
        className="btn btn-ghost btn-neutral text-primary hover:none font-bold md:text-xs"
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
      <div
        className="btn btn-ghost btn-neutral text-primary hover:none font-bold"
        onClick={() => document.getElementById("modal_contact").showModal()}
      >
        CONTACT
      </div>
      <dialog id="modal_contact" className="modal">
        <div className="modal-box w-11/12 max-w-4xl svg-contact">
          <Contact />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle text-primary absolute right-2 top-2">
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
        className="btn btn-ghost btn-neutral text-primary text-primary font-bold"
        onClick={() => document.getElementById("modal_nonprofit").showModal()}
      >
        NONPROFIT
      </button>
      <dialog id="modal_nonprofit" className="modal">
        <div className="modal-box w-11/12 max-w-4xl bg-white">
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
        className="btn btn-ghost btn-neutral text-primary font-bold"
        onClick={() => document.getElementById("modal_terms").showModal()}
      >
        TERMS
      </button>
      <dialog id="modal_terms" className="modal">
        <div className="modal-box w-11/12 max-w-4xl svg-terms">
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
        className="btn btn-ghost btn-neutral text-primary font-bold"
        onClick={() => document.getElementById("modal_privacy").showModal()}
      >
        PRIVACY
      </button>
      <dialog id="modal_privacy" className="modal">
        <div className="modal-box w-11/12 max-w-4xl svg-privacy">
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
