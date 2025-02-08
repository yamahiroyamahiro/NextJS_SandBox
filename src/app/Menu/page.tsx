"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxDashboard, RxPerson } from "react-icons/rx";
import styles from "./menu.module.css";

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <Image
        src={isCollapsed ? "/next.svg" : "/vercel.svg"}
        alt="logo"
        width={isCollapsed ? 40 : 200}
        height={40}
        className={`my-4 border-b border-gray-500 ${isCollapsed ? styles["collapse-off"] : styles["collapse-on"]}`}
      />
      <div className="pl-8 pt-4 h-full ">
        <div className="flex justify-start items-center gap-2">
          <RxDashboard />
          {!isCollapsed && (
            <Link href="/" className="underline">
              Home <br />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
