"use client";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-accent uppercase">
            Generating AI
          </h1>
          <Player
            autoplay
            loop
            src="/ai.json"
            style={{ height: "500px", width: "500px" }}
            className="m-8 opacity-60"
          ></Player>
        </div>
      </div>
    </div>
  );
}

{
  /*classsName="relative flex flex-col justify-center overflow-hidden m-8">*/
}
