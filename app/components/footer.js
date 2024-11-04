"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer footer-center p-2 flex-nowrap grow">
      <div className="divider">
        <div className="grid grid-flow-col gap-4 text-xs">
          <Link
            href="/about"
            className="hover:text-secondar-focus font-semibold px-4 uppercase"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-secondar-focus font-semibold px-4 uppercase"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="hover:text-secondar-focus font-semibold px-4 uppercase"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-secondar-focus font-semibold px-4 uppercase"
          >
            Privacy
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-col gap-4 text-xs">
        Copyright © Lexington Tech LLC {new Date().getFullYear()}
      </div>
    </div>
  );
}
