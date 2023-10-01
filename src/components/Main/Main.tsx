import { DatePicker } from "antd";
import "./style.scss";
import { Icon } from "../Icon/Icon";

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>Opportunity Overview</h1>
        <div className="header-filter">
          <p>London Internship Program</p>
          <Icon
            name="arrow"
            width={18}
            style={{ transform: "rotate(-90deg)" }}
          />
          <span className="line"></span>
          <DatePicker.RangePicker
            suffixIcon={<Icon name="Calendar_Days" />}
            onChange={(values) => {
              console.log(values?.map((value) => value!.toISOString()));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
