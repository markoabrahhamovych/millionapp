import React from "react";

// Style Imports
import "./awards-list-style.css";
import "./awards-list-style-media.css";

//Components Imports
import { AwardItem } from "./AwardItem";
import { onExtractAwardsList } from "../../utils/onExtractAwardsList";

export const AwardsList = ({ list = [] }) => {
  const itemsList = list?.length
    ? onExtractAwardsList(list)?.map((item) => (
        <AwardItem key={item?.id} item={item} />
      ))
    : null;

  return <div className={"remuneration-list-wrapper"}>{itemsList}</div>;
};
