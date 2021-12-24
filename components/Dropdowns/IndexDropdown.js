import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-slate-300 text-slate-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        More
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-indigo-200 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href="/esports">
          <a
            className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/esports"
            rel="noreferrer"
            title="eSports"
          >
            <i className="text-slate-500 fas fa-gamepad text-lg leading-lg " />
            <span className="inline-block ml-2 text-slate-500">eSports</span>
          </a>
        </Link>
        <Link href="/nonprofit">
          <a
            className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/nonprofit"
            rel="noreferrer"
            title="Non-Profit"
          >
            <i className="text-slate-500 fas fa-people-arrows text-lg leading-lg " />
            <span className="inline-block ml-2 text-slate-500">Non-Profit</span>
          </a>
        </Link>
        <Link href="/services">
          <a
            className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/services"
            rel="noreferrer"
            title="Services"
          >
            <i className="text-slate-500 fas fa-universal-access text-lg leading-lg " />
            <span className="inline-block ml-2 text-slate-500">Services</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
