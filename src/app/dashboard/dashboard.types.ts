import { Dayjs } from "dayjs";

export type SummaryType = {
  viewCount: number;
  sendCount: number;
  replyCount: number;
};

export type TargetType = {
  viewCount: number;
  sendCount: number;
  replyCount: number;
  validCount: number;
};

type WeeklySummaryDetailType = {
  viewCount: number;
  sendCount: number;
  replyCount: number;
};

export type WeeklySummaryType = {
  [key: string]: WeeklySummaryDetailType;
};

export type WeeklySummarySeriesType = {
  label: string[];
  viewCount: number[];
  sendCount: number[];
  replyCount: number[];
};

export type SearchSummaryType = {
  total: SummaryType;
  new: SummaryType;
  double: SummaryType;
};

export type SearchSummaryChildDictType = {
  [key: string]: SearchSummaryType;
};

export type DetailSummaryDictType = {
  child: SearchSummaryChildDictType;
  all: SearchSummaryType;
};

export type DetailSummaryType = {
  [key: string]: DetailSummaryDictType;
};

export type BarChartSeriesType = {
  label: string[];
  date: Dayjs[];
  actual: number[];
};

type DailySummaryDetailType = {
  targetDate: Dayjs;
  viewCount: number;
  sendCount: number;
  replyCount: number;
};

export type DailySummaryType = {
  [key: string]: DailySummaryDetailType;
};

export type CodeNameToJapaneseType = {
  [key: string]: string;
};
