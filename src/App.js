import React from "react";
import { Layout } from "antd";
import Navbar from "./App/NavBar";
import HomePage from "./Containers/HomePage";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <Navbar />
      <HomePage />
    </Content>
  );
};

export default App;
