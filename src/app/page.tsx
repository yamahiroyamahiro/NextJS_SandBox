"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div key={"content"} className="mb-4">
      <header className="w-full h-16 flex items-center bg-gray-500 shadow-md px-4">
        <h1 className="text-2xl">Home</h1>
      </header>
      <div className="flex flex-col gap-2 p-4">
        <Link href="/about" className="underline hover:opacity-50">
          About
        </Link>
        <Link href="/chat" className="underline hover:opacity-50">
          Chat
        </Link>
        <Link href="/display" className="underline hover:opacity-50">
          Display
        </Link>
        <Link href="/csv" className="underline hover:opacity-50">
          CSV
        </Link>
        <Link href="/scroll" className="underline hover:opacity-50">
          SCROLL
        </Link>
        <Link href="/dashboard" className="underline hover:opacity-50">
          DASHBOARD
        </Link>
        <Link href="/pdf" className="underline hover:opacity-50">
          PDF
        </Link>
      </div>
    </div>
  );
}
