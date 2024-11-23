export const SummaryContent = ({ value }: { value: number }) => {
  return (
    <div className="whitespace-nowrap">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-xs">件</span>
    </div>
  );
};
