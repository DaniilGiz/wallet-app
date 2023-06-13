import { FC } from "react";
import { CardStatus } from "../../Components/CardStatus/CardStatus";
import { LatestTransactions } from "../../Components/LatestTransactions/LatestTransactions";

import "./transactions.sass";

export const TransactionsList: FC = () => {
  return (
    <div className="transactions">
      <CardStatus/>
      <LatestTransactions/>
    </div>
  )
};