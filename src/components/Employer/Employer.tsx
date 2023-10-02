import React from "react";
import "./style.scss";
import { ProgramData } from "../../utils/types";
import { Icon } from "../Icon/Icon";
import "./style.scss";
import { stages } from "../../utils/mock";

type Props = {
  employerName: string;
  employerData: ProgramData["employers"][number];
};

const Employer = ({ employerName, employerData }: Props) => {
  let opportunities = Object.values(employerData.opportunities);

  const statuses = ["qualified", "disqualified", "opportunitytotal"] as const;

  return (
    <div className="card employer">
      <div className="employer-header">
        <div className="employer-name">{employerName}</div>
        <div className="employer-icons">
          <Icon name="Chart_Pie" />
          <Icon name="File_Download" />
        </div>
      </div>
      <div className="employer-total">
        {stages.map((stage) => (
          <div className="card">
            <div className="stage">{stage}</div>
            <div className="count">{employerData.employerTotal.now[stage]}</div>
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
                    count = opportunity.opportunitytotal.now[stage];
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