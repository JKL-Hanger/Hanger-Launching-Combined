import styled from "styled-components";
import { Inter25 } from "./atomic";
import { Link } from "react-router-dom";
import { Wrap } from "./atomic/container";

export default function Header() {
  return (
    <HeaderBar>
      <Wrap width="100%" justify="space-between">
        <Link to="/">
          <Inter25 color={"--hanger-black"}>HANGER;</Inter25>
        </Link>
        <Wrap gap={"40px"} align={"center"}>
          <Link to="/">
            <Inter25 color={"--hanger-black"}>메뉴</Inter25>
          </Link>
          <Link to="/team">
            <Inter25 color={"--hanger-black"}>팀원</Inter25>
          </Link>
          <Link to="/managers">
            <Inter25 color={"--hanger-black"}>경영진</Inter25>
          </Link>
          <Link to="/vision">
            <Inter25 color={"--hanger-black"}>비전</Inter25>
          </Link>
          <Link to="/betatest">
            <Inter25 color={"--hanger-black"}>베타테스트</Inter25>
          </Link>
        </Wrap>
      </Wrap>
    </HeaderBar>
  );
}

const HeaderBar = styled.div`
  height: 99px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(35px);
  padding: 0 40px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;
