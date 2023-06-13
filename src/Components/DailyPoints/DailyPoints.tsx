import { FC } from "react";

import "./dailyPoints.sass";

export const DailyPoints: FC = () => {
  return (
    <div className="card__daily">
      <p className="status__title">Daily Points</p>
      <p className="status__subtitle">456K</p>
    </div>
  )
};