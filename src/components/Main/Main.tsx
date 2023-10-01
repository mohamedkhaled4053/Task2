import { DatePicker } from "antd";
import "./style.scss";
import { Icon } from "../Icon/Icon";
import ChartOverView from "../ChartOverView/ChartOverView";
import { programData } from "../../utils/mock";

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

      <ChartOverView total={programData.total} />
    </div>
  );
};

export default Main;
