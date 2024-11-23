"use client";

import { useLeavePageConfirmation } from "@/hooks/useLeaveConfirmation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import axios from "axios";
import styles from "./users.module.css";
import Countup from "react-countup";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ja } from "date-fns/locale/ja";
import dayjs from "dayjs";

type props = {
  maxCount: number;
};

const Page = () => {
  const [isEdited, setIsEdited] = useState(false);
  const randomNumber = Math.floor(Math.random() * 100);
  const url = `https://jsonplaceholder.typicode.com/todos/${randomNumber}`;
  // const headers = {
  //   "x-api-key": "da2-iqjz4lg5xfa5znv7vqefna2xaq",
  // };
  // const Today = new Date();
  const Today = dayjs();
  // const [date, setDate] = useState(Today.toDate());
  const [date, setDate] = useState<[Date | null, Date | null]>([
    Today.toDate(),
    Today.add(1, "day").toDate(),
  ]);
  const [start, end] = date;
  registerLocale("ja", ja);

  // const count = useMotionValue(1);
  // const rounded = useTransform(count, (latest) => Math.round(latest));

  // useEffect(() => {
  //   const controls = animate(count, 101);

  //   return controls.stop;
  // }, []);
  let dataList: any = [];
  let sleepTime = 30000;
  function sleepPromise(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let a: any = null;
    let b: any = null;
    const fetchdata1 = async () => {
      const randomNumber = Math.floor(Math.random() * 100);
      const url = `https://jsonplaceholder.typicode.com/todos/${randomNumber}`;
      const result = await axios.get(url);
      console.log("fetchData1", url, result);

      if (result.status == 200) {
        dataList.push(result.data);
      }
    };
    const fetchdata2 = async () => {
      let randomNumber = Math.floor(Math.random() * 100);
      let url = `https://jsonplaceholder.typicode.com/todos/${randomNumber}`;
      let result = await axios.get(url);
      console.log("fetchData2-1", url, result);
      await sleepPromise(sleepTime).then(() => {
        console.log(`${sleepTime}ms秒処理を停止した`);
      });
      randomNumber = result.data.id + result.data.userId;
      url = `https://jsonplaceholder.typicode.com/todos/${randomNumber}`;
      result = await axios.get(url);
      console.log("fetchData2-2", url, result);
      if (result.status == 200) {
        dataList.push(result.data);
      }
    };
    a = fetchdata1();
    b = fetchdata2();
    // const handlePopstate = async () => {
    //   console.log(isEdited);

    // if (isEdited) {
    //   // history.pushState(null, '', null);
    //   console.log('trueの中で発生');
    //   window.addEventListener('popstate', (e)=>{
    //     console.log(e);
    //   });
    // }
    // };
    Promise.all([a, b])
      // Promise.all([fetchdata1(), fetchdata2()])
      .then(() => {
        console.log("fetchdata成功", dataList);
      })
      .catch((error) => {
        console.log("fetchdata失敗", error);
      })
      .finally(() => {
        console.log("fetchdata終了");
      });
    // fetchdata1()
    //   .then(() => {
    //     console.log("fetchdata成功");
    //   })
    //   .catch(() => {
    //     console.log("fetchdata失敗");
    //   })
    //   .finally(() => {
    //     console.log("fetchdata終了");
    //   });

    // 他のページに影響しないようclear
    // return () => {
    //   console.log('クリーンアップ発生');
    //   window.removeEventListener('popstate',  (e)=>{
    //     console.log(e);
    //   });
    // };
  }, [isEdited]);

  return (
    <>
      <div className="m-4">
        <h1 className="text-2xl">About</h1>
        <Link href="/users" className="underline">
          Go To Users
        </Link>
        <Link href="/about/about2" className="underline">
          Go To about2
        </Link>
      </div>
      <Countup start={5} end={10}>
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </Countup>
      <DatePicker
        // disabled={true}
        className="w-3/4"
        selectsRange={true}
        startDate={start}
        endDate={end}
        showYearDropdown
        dateFormat={"yyyy/MM/dd"}
        locale="ja"
        // selected={date}
        onChange={(date: [Date | null, Date | null]) => {
          console.log(date);
          setDate(date);
        }}
        // onChange={(date: Date) => {
        //   console.log(date);
        //   setDate(date);
        // }}
        minDate={Today.subtract(10, "year").toDate()}
        maxDate={Today.toDate()}
        isClearable={true}
      />
      <button
        onClick={() => {
          setIsEdited(!isEdited);
        }}
      >
        API発動
      </button>
      {/* <motion.div>{rounded}</motion.div>; */}
    </>
  );
};

export default Page;
