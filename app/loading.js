"use client";
export default function Loading() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-accent uppercase text-pretty text-wrap">
            Web2.0 {">>>>"} WEB3
          </h1>
          <div className="py-4">
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*classsName="relative flex flex-col justify-center overflow-hidden m-8">*/
}
