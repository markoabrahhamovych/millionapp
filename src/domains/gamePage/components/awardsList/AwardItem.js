export const AwardItem = ({ item }) => {
  const { value, currentAward, isWinAward } = item;

  return (
    <div
      className={`remuneration-item ${
        currentAward ? "remuneration-item-active" : null
      } ${isWinAward ? isWinAward : null}`}
    >
      <div className={"remuneration-item-wrapper"}>
        <div className={"remuneration-item-left"}></div>
        <span>${value}</span>
        <div className={"remuneration-item-right"}></div>
      </div>
    </div>
  );
};
