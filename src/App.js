import React from "react";
import { Layout } from "antd";
import Navbar from "./App/NavBar";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <Navbar />
    </Content>
  );
};

export default App;
