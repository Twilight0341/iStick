import React, { Fragment } from "react";
import { List, Collapse, Avatar, ProgressBar } from "antd-mobile";
import moment from "moment";

export default class SPO2 extends React.Component {
  render() {
    return (
      <Fragment>
        <List header="SPO2" style={{ backgroundColor: "#D6E5FA" }}>
          <List.Item
            prefix={
              <Avatar src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
            }
            key={"user"}
            description={"Administer Detail"}
            onClick={() => {}}
          >
            Chan Hong Chung
          </List.Item>
        </List>
        <Collapse accordion>
          {users.map((user, index) => (
            <Collapse.Panel
              key={index.toString()}
              title={moment(
                `2021-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(
                  Math.random() * 31 + 1
                )}`
              ).format("LLL")}
            >
              <p style={{ fontSize: "large", color: "black" }}>{user.id}</p>
              <p style={{ fontSize: "medium", color: "#00ADF2" }}>
                SPO2: {Math.round((Math.random() * 100 + 95) * 10) / 10}
              </p>
              <ProgressBar
                percent={50}
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

const users = [
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 1",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 2",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 1",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 3",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 4",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 4",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 2",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 3",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 2",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 1",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 3",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
    id: "STICK 4",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
    name: "Sara Koivisto",
    description: "Animi eius expedita, explicabo",
    id: "STICK 2",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Marco Gregg",
    description: "Ab animi cumque eveniet ex harum nam odio omnis",
    id: "STICK 4",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
    id: "STICK 2",
  },
];
