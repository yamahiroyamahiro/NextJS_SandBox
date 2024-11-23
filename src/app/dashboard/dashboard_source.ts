export const testData = [
  {
    DATE: "2022-01-01",
    MEDIUM_NAME: "test1",
    SOURCE_NAME: "PM",
    VIEW_COUNT: 100,
    SEND_COUNT: 50,
    REPLY_COUNT: 30,
  },
  {
    DATE: "2022-01-02",
    MEDIUM_NAME: "test1",
    SOURCE_NAME: "PM",
    VIEW_COUNT: 200,
    SEND_COUNT: 60,
    REPLY_COUNT: 40,
  },
  {
    DATE: "2022-01-03",
    MEDIUM_NAME: "test2",
    SOURCE_NAME: "フロントエンドエンジニア",
    VIEW_COUNT: 300,
    SEND_COUNT: 90,
    REPLY_COUNT: 3,
  },
  {
    DATE: "2022-01-01",
    MEDIUM_NAME: "test2",
    SOURCE_NAME: "営業",
    VIEW_COUNT: 1000,
    SEND_COUNT: 500,
    REPLY_COUNT: 33,
  },
];

type testItem = {
  viewCount: number;
  sendCount: number;
  replyCount: number;
};

export type testDataType = {
  total: { [key: string]: { [key: string]: { [key: string]: testItem } } };
  new: { [key: string]: { [key: string]: { [key: string]: testItem } } };
  existing: { [key: string]: { [key: string]: { [key: string]: testItem } } };
};
