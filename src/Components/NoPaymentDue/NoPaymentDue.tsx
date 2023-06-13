import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./noPaymentDue.sass";

export const NoPaymentDue: FC = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("EN", { month: "long" })

  return (
    <div className="card__payment">
      <p className="status__title">No Payment Due</p>
      <p className="status__subtitle">You've paid your {currentMonth} balance.</p>
      <FontAwesomeIcon icon={["fas", "circle-check"]} />
    </div>
  )
};