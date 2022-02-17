import React, { FC } from "react";
import { NavBar, TabBar, Modal, Divider } from "antd-mobile";
import { ExclamationCircleFill } from "antd-mobile-icons";
import moment from "moment";
// import { Link } from "react-router-dom";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from "react-router-dom";
import {
  AppstoreOutline,
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import HOME from "./app";
import FALL from "./fall";
import TH from "./temp";
import SPO2 from "./spo2";
import "./index.scss";

interface State {
  wstext: string;
}

const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "Home",
      icon: <AppstoreOutline />,
    },
    {
      key: "/fall",
      title: "Fall Detect",
      icon: <AppOutline />,
    },
    {
      key: "/climate",
      title: "Climate",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/spo2",
      title: "SPO2",
      icon: <MessageOutline />,
    },
    // {
    //   key: "/me",
    //   title: "Account",
    //   icon: <UserOutline />,
    // },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default class Plug extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      wstext: "",
    };

    this.ws.onopen = (e) => {
      console.log("Connected at:" + Date.now());
    };

    this.ws.onmessage = (e) => {
      if (e.data === "alert") {
        Modal.show({
          closeOnAction: true,
          actions: [
            {
              key: "close",
              text: "Close",
              primary: true,
            },
          ],
          header: (
            <ExclamationCircleFill
              style={{
                fontSize: 64,
                color: "#ff4d4f",
              }}
            />
          ),
          title: "Attention",
          content: (
            <>
              <div style={{ fontSize: "large" }}>Stick 1: Ngan Pak Kin</div>
              <Divider />
              <div style={{ fontSize: "medium" }}>
                We detected the I-STICK user fell down. Please Confirm.
              </div>
              <div style={{ fontSize: "medium" }}>{moment().format("LTS")}</div>
            </>
          ),
        });
      }
    };
  }

  ws: WebSocket = new WebSocket("ws://42.2.207.111:3011/app");

  render() {
    return (
      <>
        <HashRouter>
          <div className={"app"}>
            <div className={"top"}>
              <NavBar>
                <p
                  style={{
                    backgroundColor: "#478ac9",
                    color: "white",
                    border: "5px solid #478ac9",
                  }}
                >
                  I-STICK
                </p>
              </NavBar>
            </div>
            <div className={"body"}>
              <Routes>
                <Route path="/" element={<HOME />} />
                <Route path="/home" element={<HOME />} />
                <Route path="/fall" element={<FALL />} />
                <Route path="/climate" element={<TH />} />
                <Route path="/spo2" element={<SPO2 />} />
              </Routes>
            </div>
            <div className={"bottom"}>
              <Bottom />
            </div>
          </div>
        </HashRouter>
      </>
    );
  }
}
