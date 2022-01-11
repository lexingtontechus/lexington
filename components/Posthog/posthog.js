//Posthog
import { usePostHog } from "next-use-posthog";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { useEffect } from "react";

//const handleRouteChange = () => {
//  posthog.pageview();
//};

function Posthog({ Component, pageProps }) {
  usePostHog("process.env.POSTHOG_ID", { api_host: "https://app.posthog.com" });
}
export default Posthog;
