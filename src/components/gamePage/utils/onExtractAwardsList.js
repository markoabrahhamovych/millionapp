export const onExtractAwardsList = (list) => {
  const awardCurrentIndex = list.findIndex(
    (item) => item?.currentAward === true
  );
  return list?.length
    ? list?.map((item, index) => ({
        ...item,
        isWinAward:
          awardCurrentIndex < index ? "remuneration-item-inactive" : null,
      }))
    : [];
};
