import { FC } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatDate } from "../../Helpers";
import { transactions } from "../../Static/Data";

import "./transactionDetail.sass";

export const TransactionDetail: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const transactionDetail = id && transactions.filter((trans) => trans.id === +id)[0];

  if (!transactionDetail) {
    return null
  }

  const { title, subtitle, date } = transactionDetail;

  const transaction = title.transaction.type === "payment" 
    ? `+${title.transaction.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
    : title.transaction.amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const dateInfo = formatDate(date);

  return (
    <div className="transaction__detail">
      <div>
        <button onClick={() => navigate("/transactions/list")}>
          <FontAwesomeIcon icon={["fas","chevron-left"]} />
        </button>
      </div>
      {transactionDetail && 
        <div className="transaction__detail__info">
          <h2 className="balance">{transaction}</h2>
          <p className="status__subtitle">{title.name}</p>
          <p className="status__subtitle">{dateInfo.date}, {dateInfo.time}</p>
          <div className="transaction__detail__status">
            <p className="status__title">Status: {title.transaction.pending ? "Pending" : "Approved"}</p>
            <p className="status__subtitle">{subtitle.text}</p>
            <p className="status__title total">Total <span>{transaction}</span></p>
          </div>
        </div>
      }
    </div>
  )
};