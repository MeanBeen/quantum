import React from "react";
import { Image, Layout, Typography, Row, List } from "antd";
import { StyledText2 } from "./style";

const { Title, Text } = Typography;
const { Content } = Layout;

const data = [
  "  1.	Explore the principles of quantum mechanics and develop novel techniques for secure communication, cryptography, and network security using quantum communication protocols.",
  "2.	Investigate the theoretical foundations and practical implementations of quantum algorithms, quantum circuits, and quantum information processing techniques for solving complex computational problems and accelerating scientific discovery.",
  "3.	Develop innovative approaches at the intersection of quantum computing and machine learning to harness the power of quantum-enhanced algorithms for data analysis, pattern recognition, and optimization tasks.",
  "4.	Design and optimize quantum circuits for various quantum information processing tasks, including error correction, noise mitigation, and fault tolerance, to improve the reliability and scalability of quantum technologies.",
  "5.	Collaborate with interdisciplinary research teams, industry partners, and government agencies to translate fundamental research findings into practical applications and deploy quantum technologies in real-world settings.",
];

const HomePage = () => {
  return (
    <Content>
      <Row justify={"center"} style={{ marginBottom: 50 }}>
        <Title>The Quantum Communication and Computing Lab</Title>
      </Row>
      <Image
        preview={false}
        width={"100%"}
        height={550}
        src="https://inqnet.caltech.edu/uploads/2/8/6/6/28662917/20180912_lab.jpg"
        alt="lab"
      />
      <Row justify={"center"} style={{ marginBottom: 40, marginTop: 40 }}>
        <Title level={2}>Lab Overview</Title>
      </Row>
      <StyledText2>
        The Quantum Communication and Computing Lab (QCCL) is dedicated to
        pioneering research in the fields of quantum communication, quantum
        computing, and quantum information processing. Our research goals are
        focused on advancing the understanding and development of quantum
        technologies for secure communication, efficient computation, and robust
        information processing across diverse application domains.
      </StyledText2>
      <Row justify={"center"}>
        <Title level={2}>Our Aim</Title>
      </Row>
      <List
        style={{ fontWeight: 600 }}
        size="large"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Content>
  );
};

export default HomePage;
