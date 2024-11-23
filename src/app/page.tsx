"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4">
      <h1 className="text-2xl">Home</h1>
      <div className="flex flex-col gap-2">
        <Link href="/about" className="underline">
          Go To About
        </Link>
        <Link href="/chat" className="underline">
          Go To Chat
        </Link>
        <Link href="/display" className="underline">
          Go To Display
        </Link>
        <Link href="/csv" className="underline">
          Go To CSV
        </Link>
        <Link href="/scroll" className="underline">
          Go To SCROLL
        </Link>
        <Link href="/dashboard" className="underline">
          Go To DASHBOARD
        </Link>
        <Link href="/pdf" className="underline">
          Go To PDF
        </Link>
      </div>
    </div>
  );
}
