"use client";

import { useState } from "react";
import { Data } from "./component/data";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import "./customStyles.css"; // カスタムスタイルをインポート

const Page = () => {
  const [inputList, setInputList] = useState<string[]>([]);

  const handleAddInput = () => {
    setInputList([...inputList, ""]);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-screen whitespace-nowrap">
          <h2>col1</h2>
          <div className="simplebar-outer">
            <SimpleBar style={{ maxHeight: 600 }} autoHide={false}>
              <Data />
            </SimpleBar>
          </div>
        </div>
        <div className="bg-green-500 w-3/4 h-screen">col2</div>
      </div>
    </>
  );
};

export default Page;
