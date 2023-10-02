import React from "react";
import { Istages, total } from "../../../utils/types";
import "./style.scss";
import { stages } from "../../../utils/mock";

type Props = {
  data: {} & { qualified: Istages; disqualified: Istages; total: total };
};

const Flow = ({ data }: Props) => {
  let totalCandidates = data.qualified.applied + data.disqualified.applied;
  let qualifiedPresentage =
    Math.round((data.qualified.applied / totalCandidates) * 100) + "%";
  let disQualifiedPresentage =
    Math.round((data.disqualified.applied / totalCandidates) * 100) + "%";

  return (
    <div className="card flow">
      <div className="flow-top">
        <p className="header">total candidate flow</p>
        <p className="total">{totalCandidates}</p>
        <div className="flow-bar">
          <div className="qualified" style={{ width: qualifiedPresentage }}>
            <div className="bar"></div>
            <div className="label">qualified {qualifiedPresentage}</div>
          </div>
          <div
            className="disqualified"
            style={{ width: disQualifiedPresentage }}
          >
            <div className="bar"></div>
            <div className="label">disqualified {disQualifiedPresentage}</div>
          </div>
        </div>
      </div>

      <div className="flow-bottom">
        <div className="flow-table-head">
          <p className="stage">stage</p>
          <div>
            <p className="qualified">qualified</p>
            <p className="disqualified">disqualified</p>
          </div>
        </div>
        {stages.map((stage) => {
          if (stage === "rejected") return null;
          return (
            <div className="flow-table-row">
              <p className="stage">{stage}</p>
              <div>
                <p className="qualified">{data.qualified[stage]}</p>
                <p className="disqualified">{data.disqualified[stage]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flow;
