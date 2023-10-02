import { Input, Select, Tooltip } from "antd";
import React from "react";
import { Icon } from "../Icon/Icon";
import Employer from "../Employer/Employer";
import { ProgramData } from "../../utils/types";
import { stages } from "../../utils/mock";
import './style.scss'

type Props = {
  programData: ProgramData;
};

const Employers = ({ programData }: Props) => {
  let employers = Object.values(programData.employers).sort(
    (a, b) => a.employerTotal.now.applied - b.employerTotal.now.applied
  );
  return (
    <div className="employers">
      <h2 className="employers-header">Detailed Opportunity Overview</h2>
      <div className="filters">
        <Input
          className="search"
          prefix={<Icon name="Search" />}
          suffix={
            <Tooltip title="Extra information">
              <Icon name="Circle_Warning" />
            </Tooltip>
          }
        />
        <div className="filters-end">
          <Select className="sort">
            {stages.map((status) => (
              <Select.Option value={status}>{status}</Select.Option>
            ))}
          </Select>
          <button className="export">Export All As CSV</button>
        </div>
      </div>
      {Object.values(employers).map((employer) => (
        <Employer key={employer.name} employer={employer} />
      ))}
    </div>
  );
};

export default Employers;
