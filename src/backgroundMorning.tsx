import React from "react";
import image from "./image/morning.svg";
import { ReactComponent as Image } from "./image/morning.svg";

export default class BackgroundMorning extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage:
              "background-image: linear-gradient(#00DDF0, #FFFFFF)",
          }}
        >
          <Image />
        </div>
      </>
    );
  }
}
