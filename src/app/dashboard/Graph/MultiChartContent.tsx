import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BarChartSeriesType } from "../dashboard.types";
import dayjs, { Dayjs } from "dayjs";
import { getRateSimple } from "@/lib/rate";

export const MultiChartContent = ({
  summary,
  planTarget,
  startDate,
  endDate,
}: {
  summary: BarChartSeriesType;
  planTarget: number;
  startDate: Dayjs;
  endDate: Dayjs;
}) => {
  const getTarget = () => {
    const numberOfDays = endDate.diff(startDate, "day") + 1;
    //1か月後との差がでるはずなので30,+1で31

    // 1日あたりの目標値
    const targetOneDay = planTarget / numberOfDays;
    // planTargetは閲覧数の場合1000なので、1000/31 = 32.2...
    let targetList: number[] = [];
    summary.date.forEach((date) => {
      const targetDaysCount = dayjs(date).diff(startDate, "day") + 1;
      //1回目：
      //今日から1週間後と今日との差が出るはずなのでtargetDaysCount = 8
      //2回目：
      //今日から2週間後と今日との差が出るはずなのでtargetDaysCount = 14
      targetList.push(Math.floor(targetDaysCount * targetOneDay));
      //1回目：
      //8 * 32.2 = 256
      //2回目：
      //14 * 32.2 = 448
    });

    return targetList;
  };

  const getRate = () => {
    const targets = getTarget();
    //targets = [256,448]
    let rateList: number[] = [];
    summary.actual.forEach((actualData, index) => {
      //1回目：
      //1 > 256
      if (actualData > targets[index]) {
        rateList.push(100);
      } else {
        rateList.push(getRateSimple(actualData, targets[index]));
      }
    });
    return rateList;
  };

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "目標合計",
      type: "column",
      data: [100, 200, 300],
      color: "#3A3A3A",
    },
    {
      name: "目標前期",
      type: "column",
      data: [30, 100, 100],
      color: "#3A3A00",
    },
    {
      name: "目標後期",
      type: "column",
      data: [70, 100, 200],
      color: "#3A3AFF",
    },
    {
      name: "達成率",
      type: "line",
      data: [10, 20, 30],
      color: "#D95E77",
    },
  ];

  const chartOption: ApexOptions = {
    colors: ["#3A3A3A", "#D95E77", "#3A3A00", "#3A3AFF"], //グラフの色を設定します。配列の各要素はシリーズごとの色を表します。
    plotOptions: {
      bar: {
        //プロットオプションを設定します。ここでは、バーの幅を指定しています。
        columnWidth: "90%",
      },
    },
    // dataLabels: {
    //   //データラベルの表示を設定します。ここでは、データラベルを非表示にしています。
    //   enabled: true,
    // },
    stroke: {
      //グラフの線の設定を行います。ここでは、シリーズごとに線の太さを設定しています。
      width: [2, 2, 2, 2],
    },
    xaxis: {
      //x軸の設定を行います。ここでは、カテゴリのラベルを設定しています。
      categories: ["1月", "2月", "3月"],
    },
    yaxis: [
      //y軸の設定を行います。配列で複数のy軸を設定できます。各要素はそれぞれのy軸に関する設定を持ちます。
      {
        seriesName: "目標合計",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
      },
      {
        seriesName: "目標合計",
      },
      {
        seriesName: "目標合計",
      },
      {
        opposite: true,
        seriesName: "達成率",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
          formatter: function (val: number, opts?: any) {
            return `${val}%`;
          },
        },
      },
    ],
    legend: {
      //凡例の表示位置を設定します。ここでは、トップに設定しています。
      position: "bottom",
    },
    chart: {
      //グラフ全体に関する設定を行います。ここでは、ツールバーに関する設定を行っています。特定のツールを無効にしたり、ツールバー全体を非表示にしたりすることができます。
      toolbar: {
        tools: {
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
  };

  return (
    <div className="relative">
      <Chart type="line" series={series} options={chartOption} height={300} />
    </div>
  );
};
