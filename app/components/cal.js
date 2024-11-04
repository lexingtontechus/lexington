/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "free-consulting" });
      cal("floatingButton", {
        calLink: "lexington/free-consulting",
        config: { layout: "month_view" },
      });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="btn btn-accent mask mask-squircle fixed right-5 bottom-5 z-40 hover:text-secondary"
      data-cal-link="lexington/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      <CalIcon />
    </button>
  );
}

function CalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
      height="1.5em"
      viewBox="0 0 448 512"
    >
      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
    </svg>
  );
}
