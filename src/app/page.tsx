"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div key={"content"} className="mb-4">
      <header className="w-full h-16 flex items-center bg-black shadow-md px-4">
        <h1 className="text-2xl font-bold text-white">Home</h1>
      </header>
      <div className="flex flex-col gap-2 p-4">
        <Link href="/about" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          About
        </Link>
        <Link href="/chat" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          Chat
        </Link>
        <Link href="/display" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          Display
        </Link>
        <Link href="/csv" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          CSV
        </Link>
        <Link href="/scroll" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          SCROLL
        </Link>
        <Link href="/dashboard" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          DASHBOARD
        </Link>
        <Link href="/pdf" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          PDF
        </Link>
        <Link href="/fileUploader" className="underline pl-2 hover:bg-gray-700 hover:opacity-50 hover:text-white hover:rounded-md">
          FILE_UPLOADER
        </Link>
      </div>
    </div>
  );
}
