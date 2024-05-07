import React from "react";
import { Layout, Image, Button, Space, Row, Col } from "antd";
import { Styledpopover } from "./style";

const { Content } = Layout;

const Navbar = () => {
  return (
    <Content>
      <Row align={"middle"} justify={"space-between"}>
        <Col>
          <Image preview={false} width={100} src="/logo.png" alt="logo" />
        </Col>
        <Col>
          <Space wrap>
            <Styledpopover>
              <Button href="homepage">Areas of Expertise</Button>
            </Styledpopover>
            <Styledpopover>
              <Button href="shop">Collaborations</Button>
            </Styledpopover>
            <Styledpopover>
              <Button href="contact">Research Grants/Projects</Button>
            </Styledpopover>
            <Styledpopover>
              <Button href="User">Important Publications</Button>
            </Styledpopover>
          </Space>
        </Col>
      </Row>
    </Content>
  );
};

export default Navbar;
