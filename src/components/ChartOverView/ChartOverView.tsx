import React from "react";
import "./style.scss";
import StatCard from "./StatCard/StatCard";
import { stages, total } from "../../utils/types";
import LineChart from "./LineChart/LineChart";
import Flow from "./Flow/Flow";

type Props = {
  data: {} & { qualified: stages; disqualified: stages; total: total };
};

const ChartOverView = ({ data }: Props) => {
  return (
    <div className="chart-overview">
      <div className="right">
        <div className="report-status">
          {(["applied", "offer", "hired"] as const).map((status) => (
            <StatCard
              newValue={data.total.now[status]}
              prevValue={data.total.previous[status]}
              status={status}
            />
          ))}
        </div>
        <LineChart />
      </div>
      <div className=" left">
        <Flow data={data} />
        <div className="report-status">
          {(["recommended", "interview"] as const).map((status) => (
            <StatCard
              newValue={data.total.now[status]}
              prevValue={data.total.previous[status]}
              status={status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartOverView;
