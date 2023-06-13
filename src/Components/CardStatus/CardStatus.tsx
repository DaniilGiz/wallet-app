import { FC } from "react";

import { CardBalance } from "../CardBalance/CardBalance";
import { NoPaymentDue } from "../NoPaymentDue/NoPaymentDue";
import { DailyPoints } from "../DailyPoints/DailyPoints";

import "./cardStatus.sass";

export const CardStatus: FC = () => {
  return (
    <div className="card__status">
      <CardBalance/>
      <NoPaymentDue/>
      <DailyPoints/>
    </div>
  )
};