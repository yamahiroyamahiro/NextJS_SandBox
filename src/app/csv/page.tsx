"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./csv.module.css";

interface Cell {
  value: string;
  isDragged: boolean;
}

const initialTableData: Cell[][] = [
  [
    { value: "A1", isDragged: false },
    { value: "B1", isDragged: false },
    { value: "C1", isDragged: false },
  ],
  [
    { value: "A2", isDragged: false },
    { value: "B2", isDragged: false },
    { value: "C2", isDragged: false },
  ],
  [
    { value: "A3", isDragged: false },
    { value: "B3", isDragged: false },
    { value: "C3", isDragged: false },
  ],
];

const Page = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [tableData, setTableData] = useState(initialTableData);
  const [isDragging, setIsDragging] = useState(false);
  const [isPushing, setIsPushing] = useState(false);

  function RowCellLength(
    table: HTMLTableElement,
    rowIndex: number,
    colIndex: number
  ) {
    console.log(rowIndex, colIndex);

    // テーブル内の行数を取得
    const rowCount = table.rows.length;

    // 列ごとにループ
    // for (let i = 0; i < table.rows[0].cells.length; i++) {
    // 上のセルの値を取得
    const selectedCellValue = table.rows[rowIndex].cells[colIndex].textContent;
    console.log(selectedCellValue);

    // 下の行からセルを取得し、上のセルの値を設定
    for (let j = rowIndex; j < rowCount; j++) {
      table.rows[j].cells[colIndex].textContent = selectedCellValue;
    }
    // }
  }

  useEffect(() => {
    // RowCellLength(document.getElementById("table1") as HTMLTableElement);
  }, []);

  // マウスが押された時の処理
  const handleMouseDown = (rowIndex: number, colIndex: number) => {
    setIsDragging(true);
    setTableData((prevData) => {
      return prevData.map((row, index) => {
        return row.map((cell, index2) => {
          if (index === rowIndex && index2 === colIndex) {
            return {
              ...cell,
              isDragged: true,
            };
          }
          return cell;
        });
      });
    });
  };
  // マウスが動いた時の処理
  const handleMouseMove = (rowIndex: number, colIndex: number) => {
    if (isPushing) {
      setIsDragging(true);
      setTableData((prevData) => {
        return prevData.map((row, index) => {
          return row.map((cell, index2) => {
            if (cell.isDragged) {
              const newRow = prevData[rowIndex + index];
              if (newRow && newRow[colIndex + index2]) {
                return {
                  ...cell,
                  value: newRow[colIndex + index2].value, // 値をコピー
                };
              }
            }
            return cell;
          });
        });
      });
    }
  };

  // マウスが離された時の処理
  const handleMouseUp = () => {
    setIsDragging(false);
    setTableData((prevData) => {
      return prevData.map((row) => {
        return row.map((cell) => {
          if (typeof cell === "object") {
            return { ...cell, isDragged: false }; // isDraggedをリセット
          }
          return cell;
        });
      });
    });
  };

  const downloadCSV = (csv: string, filename: string): void => {
    const link = anchorRef.current;
    if (!link) return;
    const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" }); //Windowsだと文字化けしない
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
    console.log("link", link);
    console.log("blob", blob);
    console.log("url", url);
    console.log("Downloaded!!");
  };

  class User {
    constructor(
      private _name: string,
      private _age: string,
      private _address: string
    ) {}

    value() {
      return [this._name, this._age, this._address];
    }

    static key1() {
      return ["名前", "バイタル", "財務状況"];
    }

    static key2() {
      return ["", "身長", "体重", "資産", "負債", "純資産"];
    }
  }

  //CSVのデータ
  const users = [
    new User("木村太郎", "25", "東京都"),
    new User("田中花子", "20", "千葉県"),
  ];

  // const convertToCSV = (users: User[]): string => {
  //   const key = User.key1()
  //   const values = users.map((user) => user.value())
  //   const array = [key].concat(values)
  //   console.log("key",key);
  //   console.log("values",values);
  //   console.log("array",array);
  //   console.log(array.map((a) => a.join(',')).join('\n'));

  //   return array.map((a) => a.join(',')).join('\n')
  // }

  const convertToCSV = (
    data: string[][],
    keys1: string[],
    keys2: string[]
  ): string => {
    const headerRow1 = keys1.join(",");
    const headerRow2 = keys2.join(",");

    const rows = data.map((row) => row.join(","));

    return headerRow1 + ",,,,\n" + headerRow2 + ",\n" + rows.join("\n");
  };

  // 使用例
  const data = [
    ["山田太郎", "70", "172", "500", "3000", "-2500"],
    ["木村花子", "45", "150", "5000", "100", "4900"],
  ];

  const keys1 = User.key1();
  const keys2 = User.key2();

  const csv = convertToCSV(data, keys1, keys2);

  return (
    <>
      <button
        className={styles.btn}
        // onClick={() => downloadCSV(convertToCSV(users), 'user_list.csv')}
        onClick={() => downloadCSV(csv, "user_list.csv")}
      >
        DownLoad
      </button>
      <a ref={anchorRef} className="hidden"></a>
      <table id="table1" className={styles.table}>
        {/* KEY1 */}
        <thead>
          <tr>
            {keys1.map((key, index) => (
              <th
                key={index}
                colSpan={key === "バイタル" ? 2 : key === "財務状況" ? 3 : 1}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        {/* KEY2 */}
        <thead>
          <tr>
            {keys2.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        {/* Data */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  onClick={() =>
                    RowCellLength(
                      document.getElementById("table1") as HTMLTableElement,
                      rowIndex,
                      cellIndex
                    )
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <table id="table2" className={styles.table}>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  style={isDragging ? { border: "2px solid red" } : {}}
                  key={colIndex}
                  onMouseDown={() => setIsPushing(true)}
                  onMouseLeave={() => {
                    setIsDragging(false);
                  }}
                  onMouseEnter={() => {
                    isPushing && setIsDragging(true);
                  }}
                  // onMouseMove={() => handleMouseMove(rowIndex, colIndex)}
                  onMouseUp={() => setIsPushing(false)}
                  onClick={() =>
                    RowCellLength(
                      document.getElementById("table2") as HTMLTableElement,
                      rowIndex,
                      colIndex
                    )
                  }
                >
                  {typeof cell === "object" ? cell.value : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;

// console.log("this is log");
// console.error("this is error");
// console.warn("this is warn");
// console.info("this is warn");
