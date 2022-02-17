import React, { Fragment } from "react";
import { List, Collapse, Avatar, Tag } from "antd-mobile";
import moment from "moment";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import User from "./image/user.png";
import { fallDownDataSet } from "./dataSet";

export default class FALL extends React.Component {
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
        <List header="Fall Down Detect" style={{ backgroundColor: "#D6E5FA" }}>
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
          {fallDownDataSet.map((data, index) => (
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
              <Tag
                style={{ fontSize: "large", marginBottom: "2%" }}
                color="#FF3141"
              >
                Fall Detected
              </Tag>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1",
                }}
              >
                <MapContainer
                  style={{
                    height: "45vh",
                    width: "90vw",
                  }}
                  center={[data.lat, data.lng]}
                  zoom={13}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[data.lat, data.lng]}>
                    <Popup>Fall Down Location</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Fragment>
    );
  }
}

// const fallDownDataSet = [
//   {
//     id: "STICK 2", //STICK 1, STICK 2, STICK 3...
//     name: "Lam Chi Kin",
//     Date: "2021-2-15 13:25:39",
//     Location: [324.3, 432, 334], //Not sure I will send you late
//   },
//   {
//     id: "STICK 1", //STICK 1, STICK 2, STICK 3...
//     name: "Ngan Pak Kin",
//     Date: "2021-2-15 20:59:12",
//     Location: [324.3, 432, 334], //Not sure I will send you late
//   },
//   {
//     id: "STICK 3", //STICK 1, STICK 2, STICK 3...
//     name: "Chan Hon Ching",
//     Date: "2021-2-16 09:32:58",
//     Location: [324.3, 432, 334], //Not sure I will send you late
//   },
//   {
//     id: "STICK 3", //STICK 1, STICK 2, STICK 3...
//     name: "Chan Hon Ching",
//     Date: "2021-2-16 13:37:46",
//     Location: [324.3, 432, 334], //Not sure I will send you late
//   },
// ];
