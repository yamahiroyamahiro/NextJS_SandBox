"use client";

import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Component } from "./component";

import type { NextPage } from "next";
// TODOを探しやすくする？ライブラリ？
const PdfTestPage: NextPage = () => {
  const pdhDownloadHandler = () => {
    // PDFファイルに変換したいコンポーネントのidを検索してDOM要素を取得する
    const target = document.getElementById("pdf-id");
    if (target === null) return;

    html2canvas(target, { scale: 2.5 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/svg", 1.0);
      let pdf = new jsPDF();
      pdf.addImage(
        imgData,
        "SVG",
        5,
        10,
        canvas.width / 18,
        canvas.height / 18
      );
      pdf.save(`test.pdf`);
    });
  };

  return (
    <>
      <button type="button" onClick={pdhDownloadHandler}>
        PDFファイルをダウンロードするボタン
      </button>
      <Component />
    </>
  );
};

export default PdfTestPage;
