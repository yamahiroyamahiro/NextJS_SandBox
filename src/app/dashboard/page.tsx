"use client";

import styles from "./dashboard.module.css";
import dayjs, { Dayjs } from "dayjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { ProjectSummary } from "./ProjectSummary";
import { Graph } from "./Graph";
import { BarChartSeriesType } from "./dashboard.types";
import { useState } from "react";
import { testData, testDataType } from "./dashboard_source";

const Page = () => {
  const testGraphData: testDataType = {
    total: {
      test: { test: { test: { viewCount: 0, sendCount: 0, replyCount: 0 } } },
    },
    new: {
      test: { test: { test: { viewCount: 0, sendCount: 0, replyCount: 0 } } },
    },
    existing: {
      test: { test: { test: { viewCount: 0, sendCount: 0, replyCount: 0 } } },
    },
  };

  testData.forEach((data) => {
    const date = dayjs(data.DATE).format("YYYY-MM-DD");
    const medium = data.MEDIUM_NAME;
    const source = data.SOURCE_NAME;
    if (
      data.DATE in testGraphData.total &&
      data.MEDIUM_NAME in testGraphData.total[data.DATE] &&
      data.SOURCE_NAME in testGraphData.total[data.DATE][data.MEDIUM_NAME]
    ) {
      testGraphData.total[data.DATE][data.MEDIUM_NAME][data.SOURCE_NAME] = {
        viewCount:
          testGraphData.total[data.DATE][data.MEDIUM_NAME][data.SOURCE_NAME]
            .viewCount + data.VIEW_COUNT,
        sendCount:
          testGraphData.total[data.DATE][data.MEDIUM_NAME][data.SOURCE_NAME]
            .sendCount + data.SEND_COUNT,
        replyCount:
          testGraphData.total[data.DATE][data.MEDIUM_NAME][data.SOURCE_NAME]
            .replyCount + data.REPLY_COUNT,
      };
    } else {
      testGraphData.total[data.DATE][data.MEDIUM_NAME][data.SOURCE_NAME] = {
        viewCount: data.VIEW_COUNT,
        sendCount: data.SEND_COUNT,
        replyCount: data.REPLY_COUNT,
      };
    }
  });

  const summary = {
    viewCount: 100,
    sendCount: 50,
    replyCount: 30,
  };

  const validReplyCounter = 20;

  const views: BarChartSeriesType = {
    label: ["テスト１", "テスト２", "テスト３"],
    date: [
      dayjs().add(1, "week"),
      dayjs().add(2, "week"),
      dayjs().add(3, "week"),
    ],
    actual: [50, 100, 150],
  };
  const replies: BarChartSeriesType = {
    label: ["テスト１", "テスト２", "テスト３"],
    date: [
      dayjs().add(1, "week"),
      dayjs().add(2, "week"),
      dayjs().add(3, "week"),
    ],
    actual: [50, 100, 150],
  };
  const valids: BarChartSeriesType = {
    label: ["テスト１", "テスト２", "テスト３"],
    date: [
      dayjs().add(1, "week"),
      dayjs().add(2, "week"),
      dayjs().add(3, "week"),
    ],
    actual: [50, 100, 150],
  };
  const sends: BarChartSeriesType = {
    label: ["テスト１", "テスト２", "テスト３"],
    date: [
      dayjs().add(1, "week"),
      dayjs().add(2, "week"),
      dayjs().add(3, "week"),
    ],
    actual: [50, 100, 150],
  };

  const targetPlan = {
    viewCount: 1000,
    replyCount: 100,
    validCount: 20,
    sendCount: 50,
  };

  const [targetStartDate, setTargetStartDate] = useState<Dayjs>(dayjs());
  const [targetEndDate, setTargetEndDate] = useState<Dayjs>(
    dayjs().add(1, "month")
  );

  return (
    <>
      <h2 className="text-3xl font-bold leading-none tracking-tight">
        全体進捗
      </h2>
      <div className="text-sm text-seconded">
        {dayjs().format("YYYY/MM/DD HH:mm")}時点
      </div>
      <div>
        <label htmlFor="startDate">開始日</label>
        <input
          id="startDate"
          type="date"
          onBlur={(e) => setTargetStartDate(dayjs(e.target.value))}
        />{" "}
        ~<label htmlFor="endDate">終了日</label>
        <input
          id="endDate"
          type="date"
          onBlur={(e) => setTargetEndDate(dayjs(e.target.value))}
        />
      </div>
      <div className="">
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <Graph
              summary={views}
              planTarget={targetPlan.viewCount}
              startDate={targetStartDate}
              endDate={targetEndDate}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
