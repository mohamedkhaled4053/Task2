import React from "react";
import "./style.scss";
import StatCard from "./StatCard/StatCard";
import { total } from "../../utils/types";
import DataChart from "./DataChart/DataChart";

type Props = {
  total: total;
};

const ChartOverView = ({ total }: Props) => {
  return (
    <div className="chart-overview">
      <div className="right">
        <div className="report-status">
          {(["applied", "offer", "hired"] as const).map((status) => (
            <StatCard
              newValue={total.now[status]}
              prevValue={total.previous[status]}
              status={status}
            />
          ))}
        </div>
        <DataChart />
      </div>
      <div className="card left"></div>
    </div>
  );
};

export default ChartOverView;
