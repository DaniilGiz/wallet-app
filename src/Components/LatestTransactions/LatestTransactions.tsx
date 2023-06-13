import { FC } from "react";
import { Transaction } from "../Transaction/Transaction";
import { transactions } from "../../Static/Data";

import "./latestTransactions.sass";

export const LatestTransactions: FC = () => {
  return (
    <div className="transactions__latest">
      <h3>LatestTransactions</h3>
      <ul className="transactions__list">
        {transactions.map((transaction) => <Transaction key={transaction.id} {...transaction} />)}
      </ul>
    </div>
  )
};