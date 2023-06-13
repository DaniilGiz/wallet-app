import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { formatDate } from "../../Helpers";

import "./transaction.sass";

export interface ITransaction {
  id: number | string;
  title: {
    name: string;
    transaction: {
      pending: boolean;
      type: string;
      amount: number;
    }
  },
  logo: string;
  subtitle: {
    text: string;
    percent?: number;
  },
  date: number;
  authorizedUser?: string;
}

export const Transaction: FC<ITransaction> = (props) => {

  const navigate = useNavigate()

  const { id, title, logo, subtitle, date, authorizedUser } = props;

  const transaction = title.transaction.type === "payment" 
    ? `+${title.transaction.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
    : title.transaction.amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <li className="transaction" onClick={() => navigate(`/transaction/detail/${id}`)}>
      <img src={logo} alt="temp" width={45} />
      <div className="transaction__info">
        <div className="transaction__title">
          <p>{title.name}</p>
          <span>{transaction}</span>
        </div>
        {subtitle.percent 
        ? 
          <div className="transaction__description">
            <p className="transaction__subtitle ellipsis">
              {title.transaction.pending && "Pending - "}{subtitle.text}
            </p>
            <span className="transaction__percent">{subtitle.percent}%</span>
          </div>
        : 
          <p className="transaction__subtitle ellipsis">
            {title.transaction.pending && "Pending - "}{subtitle.text}
          </p>
        }
        <p className="transaction__subtitle">
          {authorizedUser && `${authorizedUser} - `}{formatDate(date).date}
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={["fas","chevron-right"]} />
      </div>
    </li>
  )
};