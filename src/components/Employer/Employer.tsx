import { useState } from "react";
import "./style.scss";
import { ProgramData } from "../../utils/types";
import { Icon } from "../Icon/Icon";
import "./style.scss";
import { stages } from "../../utils/mock";
import { Tooltip } from "antd";
import ChartOverView from "../ChartOverView/ChartOverView";

type Props = {
  employer: ProgramData["employers"][string];
};

const Employer = ({ employer }: Props) => {
  let [isChart, setIsChart] = useState(false);

  let opportunities = Object.values(employer.opportunities);

  const statuses = ["qualified", "disqualified", "opportunitytotal"] as const;

  if (isChart)
    return (
      <div className="employer-chart-view">
        <h2>Program Overview - {employer.name} </h2>
        {opportunities.map((opportunity) => (
          <ChartOverView data={opportunity} header={opportunity.label} />
        ))}
      </div>
    );

  return (
    <div className="card employer">
      <div className="employer-header">
        <div className="employer-name">{employer.name}</div>
        <div className="employer-icons">
          <Tooltip title="View Data Charts">
            <Icon name="Chart_Pie" onClick={() => setIsChart(true)} />
          </Tooltip>
          <Tooltip title="CSV Download">
            <Icon name="File_Download" />
          </Tooltip>
        </div>
      </div>
      <div className="employer-total">
        {stages.map((stage) => (
          <div className="card">
            <div className="stage">{stage}</div>
            <div className="count">{employer.employerTotal.now[stage]}</div>
          </div>
        ))}
      </div>
      <div className="opportunity-table">
        <div className="opportunity-table-header">
          <div className="opportunity-name">opportunity name</div>
          <div className="status">status</div>
          {stages.map((stage) => (
            <>{stage !== "rejected" && <div className="count">{stage}</div>}</>
          ))}
        </div>
        {opportunities.map((opportunity) => (
          <>
            {statuses.map((status, index) => (
              <div className="opportunity-table-row ">
                <div className="opportunity-name">
                  {index === 1 && opportunity.label}
                </div>
                <div className={`status ${status}`}></div>

                {stages.map((stage) => {
                  if (stage === "rejected") return null;
                  let count: number;
                  if (status === "opportunitytotal") {
                    count = opportunity.total.now[stage];
                  } else {
                    count = opportunity[status][stage];
                  }
                  return <div className={`count ${status}`}>{count}</div>;
                })}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Employer;
