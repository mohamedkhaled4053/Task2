import { DatePicker, Input, Select, Tooltip } from "antd";
import "./style.scss";
import { Icon } from "../Icon/Icon";
import ChartOverView from "../ChartOverView/ChartOverView";
import { programData, stages } from "../../utils/mock";
import Employer from "../Employer/Employer";

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>Opportunity Overview</h1>
        <div className="header-filter">
          <p>London Internship Program</p>
          <Icon name="arrow_down" />
          <span className="line"></span>
          <DatePicker.RangePicker
            suffixIcon={<Icon name="Calendar_Days" />}
            onChange={(values) => {
              console.log(values?.map((value) => value!.toISOString()));
            }}
          />
        </div>
      </div>

      <ChartOverView data={programData} />

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
        {Object.keys(programData.employers).map((employerName) => (
          <Employer
            key={employerName}
            employerName={employerName}
            employerData={programData.employers[employerName]}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
