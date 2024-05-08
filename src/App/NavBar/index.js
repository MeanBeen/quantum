import React from "react";
import { Layout, Image, Button, Space, Row, Col } from "antd";
import { StyledText, Styledpopover } from "./style";

const { Content } = Layout;

const Navbar = () => {
  return (
    <Content>
      <Row align={"middle"} justify={"space-between"}>
        <Col>
          <Image
            preview={false}
            width={100}
            src="https://i.ibb.co/G0DxRRW/Screenshot-2024-05-07-170336.png"
            alt="logo"
          />
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
        <Col>
          <StyledText>Max</StyledText>
        </Col>
      </Row>
    </Content>
  );
};

export default Navbar;
