import React from "react";
import { Icon } from "../../Icon/Icon";
import "./style.scss";

type Props = {
  status: "applied" | "offer" | "hired" | 'recommended' | 'interview';
  newValue: number;
  prevValue: number;
};

const StatCard = ({ newValue, prevValue, status }: Props) => {
  return (
    <div className="card stat-card">
      <div className="current-stat">
        <div className="stat">{status}</div>
        <div className="count">{newValue}</div>
      </div>
      <div className="prev-stat">
        <p>previous period</p>
        <div className="prev-count">
          <span>{prevValue}</span>
          <div className={`comparison ${newValue < prevValue ? "down" : ""}`}>
            <Icon name="Trending" />
            15%
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
