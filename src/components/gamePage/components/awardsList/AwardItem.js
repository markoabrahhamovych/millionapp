export const AwardItem = ({ item }) => {
  const { value, currentAward, isWinAward } = item;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        className={`remuneration-item ${
          currentAward ? "remuneration-item-active" : ""
        } ${isWinAward ? isWinAward : ""}`}
      >
        <div className={"remuneration-special-wrapper"}></div>
        <div className={"remuneration-item-wrapper"}>
          <div className={"remuneration-item-left"}></div>
          <span>${value}</span>
          <div className={"remuneration-item-right"}></div>
        </div>
      </div>
    </div>
  );
};
