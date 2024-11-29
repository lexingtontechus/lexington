import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import "./app.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
//import PopUpCal from "./components/popupCal";
//import Cal from "./components/cal";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "LEXINGTON TECH LLC",
  description:
    "Management & Technology Consulting | AI, Smart FX, Blockchain, Hyper-Local Microservices. Web 3.0 Blockchain Domain IPFS.",
  keywords: [
    "Lexington",
    "Lexington Tech",
    "Unstoppable Domains",
    "Web 3",
    "WEB3",
    "Blockchain",
    "IPFS",
    "Interplantary File System",
    "Fleek",
    "Storj",
    "Quantum Management",
    "Management Consulting",
    "FoodTech",
    "BioTech",
    "Hyperlocal Microservices",
    "Forex",
    "SmartFX",
    "Pharmatech",
    "BTAB eCommerce Group",
    "BTAB Corp",
  ],
};
export const openGraphImage = {
  images: [
    "https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ai_background.webp",
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://tag.clearbitscripts.com/v1/pk_126795802f07040d1691ded088ce171b/tags.js"
        referrerpolicy="strict-origin-when-cross-origin"
      />
      <body>
        <Navbar />
        <div className="capitalize mb-4">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
