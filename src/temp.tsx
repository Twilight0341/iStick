import React, { Fragment, Props } from "react";
import { List, Collapse, Avatar, ProgressBar, Tag, Popup } from "antd-mobile";
import moment from "moment";
import User from "./image/user.png";
import { THS2DataSet } from "./dataSet";

interface State {
  popupCheck: boolean;
}

export default class TH extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      popupCheck: false,
    };
  }
  color = (value: number, mode: string) => {
    if (mode === "hum") {
      if (value <= 50) {
        return "#FF3141";
      }
      if (value > 50 && value <= 70) {
        return "#fadb14";
      }
      if (value > 70) {
        return "#87d068";
      }
    }
    if (mode === "temp") {
      if (value <= 15) {
        return "#69c0ff";
      }
      if (value > 15 && value <= 24) {
        return "#87d068";
      }
      if (value > 24) {
        return "#cf1322";
      }
    }
    if (mode === "temp-text") {
      if (value <= 15) {
        return "Cold";
      }
      if (value > 15 && value <= 24) {
        return "Comfort";
      }
      if (value > 24) {
        return "Hot";
      }
    }
  };

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
        <List
          header="Temperature and Humidity"
          style={{ backgroundColor: "#D6E5FA" }}
        >
          <List.Item
            prefix={<Avatar src={User} />}
            key={"user"}
            description={"Administer Detail"}
            onClick={() => {
              this.setState({ popupCheck: true });
            }}
          >
            Chan Hong Chung
            <Popup
              style={{ height: "50vh" }}
              visible={false}
              onMaskClick={() => {
                this.setState({ popupCheck: false });
              }}
              position="left"
              bodyStyle={{ minWidth: "60vw" }}
            >
              Hello
            </Popup>
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
              <p style={{ fontSize: "large", color: "black" }}>{data.id}</p>
              <p style={{ fontSize: "medium", color: "black" }}>
                temperature: {data.tempature}
                <span>&nbsp;&nbsp;</span>
                <Tag
                  style={{ fontSize: "small" }}
                  color={this.color(data.tempature, "temp")}
                >
                  {this.color(data.tempature, "temp-text")}
                </Tag>
              </p>
              <div>
                <p style={{ fontSize: "medium", color: "black" }}>
                  humidity: {data.humidity}
                </p>
                <ProgressBar
                  percent={data.humidity}
                  style={{
                    width: "80vw",
                    "--track-width": "10px",
                    "--fill-color": this.color(data.humidity, "hum"),
                  }}
                />
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Fragment>
    );
  }
}
