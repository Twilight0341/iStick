import React, { Fragment } from "react";
import { List, Collapse, Avatar, ProgressBar, Tag } from "antd-mobile";
import moment from "moment";
import User from "./image/user.png";
import { THS2DataSet } from "./dataSet";

export default class SPO2 extends React.Component {
  colorDetect = (value: string) => {
    switch (value) {
      case "STICK 1":
        return "#36cfc9";
      case "STICK 2":
        return "#9254de";
      case "STICK 3":
        return "#ff7a45";
    }
  };

  render() {
    return (
      <Fragment>
        <List header="SPO2" style={{ backgroundColor: "#D6E5FA" }}>
          <List.Item
            prefix={<Avatar src={User} />}
            key={"user"}
            description={"Administer Detail"}
            onClick={() => {}}
          >
            Chan Hong Chung
          </List.Item>
        </List>
        <Collapse accordion>
          {THS2DataSet.map((data, index) => (
            <Collapse.Panel
              key={index.toString()}
              title={
                <>
                  <div>
                    {moment(
                      data.Date
                      // `2021-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(
                      //   Math.random() * 31 + 1
                      // )} 13:00:00`
                    ).format("LLL")}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Tag
                      style={{ fontSize: "small" }}
                      color={this.colorDetect(data.id)}
                    >
                      {data.id}
                    </Tag>
                  </div>
                </>
              }
            >
              <p style={{ fontSize: "large", color: "black" }}>{data.name}</p>
              <p style={{ fontSize: "medium", color: "#00ADF2" }}>
                SPO2: {data.spo2}
              </p>
              <ProgressBar
                percent={data.spo2}
                style={{
                  width: "80vw",
                  "--track-width": "10px",
                  "--fill-color": "#00BFFF",
                }}
              />
            </Collapse.Panel>
          ))}
        </Collapse>
      </Fragment>
    );
  }
}
