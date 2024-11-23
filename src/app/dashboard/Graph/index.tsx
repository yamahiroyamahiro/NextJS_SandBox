import dayjs, { Dayjs } from "dayjs";
import { MultiChartContent } from "../Graph/MultiChartContent";
import { BarChartSeriesType } from "../dashboard.types";

export const Graph = ({
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
  return (
    <div>
      <MultiChartContent
        summary={summary}
        planTarget={planTarget}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};
