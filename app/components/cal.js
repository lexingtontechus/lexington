"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "lexington/30min",
        buttonText: "BOOK",
        buttonColor: "#3730a3",
        buttonTextColor: "#cbd5e1",
        hideButtonIcon: false,
        buttonPosition: "bottom-left",
      });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#0f172a" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
}
