import styled from "styled-components";
import { Popover, Typography } from "antd";

const { Text } = Typography;

export const Styledpopover = styled(Popover)`
  font-size: 16px;
  border: none;
  padding: 5px;
  font-weight: 600;
  box-shadow: none;
`;

export const StyledText = styled(Text)`
  font-size: 16px;
  border: 10px solid black;
  padding: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
