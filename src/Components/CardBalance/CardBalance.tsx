import { FC } from "react";

import { calculateCardAvailable } from "../../Helpers";
import { cardLimit, cardBalance } from "../../Static/Data";

import "./cardBalance.sass";

export const CardBalance: FC = () => {

  const available = calculateCardAvailable(cardLimit, cardBalance);
  const balance = cardBalance.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="card__balance">
      <p className="status__title">Card Balance</p>
      <p className="balance">{balance}</p>
      <p className="status__subtitle">{available} Available</p>
    </div>
  )
};