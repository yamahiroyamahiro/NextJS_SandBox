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
        width={isCollapsed ? 40 : 240}
        height={40}
        className={`m-4 ${isCollapsed ? styles["collapse-off"] : styles["collapse-on"]}`}
      />
      <div className="flex">
        <RxDashboard />
        {!isCollapsed && (
          <Link href="/" className="underline">
            Home <br />
          </Link>
        )}
      </div>
    </>
  );
};

export default Page;
