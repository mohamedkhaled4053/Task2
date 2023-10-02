import { Input, Select, Tooltip } from "antd";
import { useState } from "react";
import { Icon } from "../Icon/Icon";
import Employer from "../Employer/Employer";
import { ProgramData } from "../../utils/types";
import { stages } from "../../utils/mock";
import "./style.scss";

type Props = {
  programData: ProgramData;
};

const Employers = ({ programData }: Props) => {
  let [sortBy, setSortBy] = useState<(typeof stages)[number]>();
  let [isAscending, setIsAscending] = useState<boolean>(true);
  let [search, setSearch] = useState<string>("");

  let employers = Object.values(programData.employers)
    .filter((employer) => employer.name.includes(search))
    .sort((a, b) => {
      if (!sortBy) return 0;
      let first = a.employerTotal.now[sortBy];
      let second = b.employerTotal.now[sortBy];
      if (!first || !second) return 0;

      if (isAscending) return first - second;
      return second - first;
    });

  return (
    <div className="employers">
      <h2 className="employers-header">Detailed Opportunity Overview</h2>
      <div className="filters">
        <Input
          className="search"
          placeholder="Search by employer name"
          prefix={<Icon name="Search" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          suffix={
            <Tooltip title="Extra information">
              <Icon name="Circle_Warning" />
            </Tooltip>
          }
        />
        <div className="filters-end">
          <Select
            className="sort"
            value={sortBy}
            onChange={(val) => setSortBy(val)}
            placeholder="sort by"
            suffixIcon={
              <Icon
                onClick={() => setIsAscending(!isAscending)}
                name={isAscending ? "ascending" : "descending"}
              />
            }
          >
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
