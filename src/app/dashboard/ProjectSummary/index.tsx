import Image from "next/image";
import { MiniHeader } from "./MiniHeader";
import { RateContent } from "./RateContent";
import { SubHeader } from "./SubHeader";
import { SummaryContent } from "./SummaryContent";
import { SummaryType } from "../dashboard.types";
import { getRate } from "@/lib/rate";

export const ProjectSummary = ({
  summary,
  validReplyCounter,
}: {
  summary: SummaryType;
  validReplyCounter: number;
}) => {
  return (
    <div className="flex gap-x-2 justify-around content-start">
      <div className="text-center">
        <SubHeader>閲覧数</SubHeader>
        <SummaryContent value={summary.viewCount} />
      </div>
      <div className="text-center">
        <Image
          src={"/arrow-right.svg"}
          alt={"arrow_right"}
          width={20}
          height={37}
          className="mx-auto"
        />
        <MiniHeader>送信率</MiniHeader>
        <RateContent value={getRate(summary.sendCount, summary.viewCount)} />
      </div>
      <div className="text-center">
        <SubHeader>送信数</SubHeader>
        <SummaryContent value={summary.sendCount} />
      </div>
      <div className="text-center">
        <Image
          src={"/arrow-right.svg"}
          alt={"arrow_right"}
          width={20}
          height={37}
          className="mx-auto"
        />
        <MiniHeader>返信率</MiniHeader>
        <RateContent value={getRate(summary.replyCount, summary.sendCount)} />
      </div>
      <div className="text-center">
        <SubHeader>返信数</SubHeader>
        <SummaryContent value={summary.replyCount} />
      </div>
      <div className="text-center">
        <Image
          src={"/arrow-right.svg"}
          alt={"arrow_right"}
          width={20}
          height={37}
          className="mx-auto"
        />
        <MiniHeader>有効率</MiniHeader>
        <RateContent value={getRate(validReplyCounter, summary.replyCount)} />
      </div>
      <div className="text-center">
        <SubHeader>有効数</SubHeader>
        <SummaryContent value={validReplyCounter} />
      </div>
    </div>
  );
};
