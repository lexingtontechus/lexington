"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col px-4">
      <div className="divider">
        <div className="grid grid-flow-col gap-4 text-xs">
          <Link
            href="/about"
            className="hover:text-accent font-semibold lg:px-4 uppercase"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-accent font-semibold px-4 uppercase"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="hover:text-accent font-semibold px-4 uppercase"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-accent font-semibold px-4 uppercase"
          >
            Privacy
          </Link>
        </div>
      </div>
      <div className="footer footer-center p-2 flex-nowrap grow">
        <div className="font-semibold px-4 tx-sm">
          © Lexington Tech LLC {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
