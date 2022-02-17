import React, { Fragment } from "react";
import "leaflet/dist/leaflet.css";
import image from "./image/morning1.svg";
import { AutoCenter } from "antd-mobile";

export default class HOME extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            backgroundImage: "linear-gradient(#00DDF0, #FFFFFF)",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div style={{ fontSize: "3rem", color: "#595959" }}>
            <AutoCenter style={{ marginBottom: "4%" }}>Good Morning</AutoCenter>
            <AutoCenter style={{ marginBottom: "4%" }}>
              Welcome to use
            </AutoCenter>
            <AutoCenter style={{ marginBottom: "4%" }}>I-STICK</AutoCenter>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/*<AutoCenter>Hello</AutoCenter>*/}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              style={{
                width: "100vw",
                height: "121vh",
                overflow: "hidden",
                backgroundRepeat: "repeat-x",
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
