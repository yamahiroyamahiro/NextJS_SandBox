"use client";

import React, { useState } from "react";
import PDFUploader from "./PDFUploader";
import type { NextPage } from "next";

const PdfUploadPage: NextPage = () => {
  return (
    <>
      <h2>PDFアップロード</h2>
      <PDFUploader />
    </>
  );
};

export default PdfUploadPage;
