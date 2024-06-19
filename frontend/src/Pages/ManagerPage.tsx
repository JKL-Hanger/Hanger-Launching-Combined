import styled from "styled-components";
import {
  Blank,
  Col,
  Inter20,
  Inter50,
  Inter80,
  Row,
} from "../components/atomic";

export default function ManagerPage() {
  return (
    <div>
      <LeadingImage />
      <Blank height="600px" />
      <Col padding={"40px"}>
        <Inter50 color={"--hanger-brand"} $bold>
          경영진
        </Inter50>

        <Blank height="50px" />
        <Row gap={"10px"}>
          <Inter80 color={"--hanger-black"} $bold>
            김민성
          </Inter80>
          <Inter50 color={"--hanger-black"} $bold>
            CEO
          </Inter50>
        </Row>
        <Blank height="100px" />
        <Inter20 $bold>
          | 수원고색고등학교 <br />
          | Hanger & Co 대표이사 <br />| 총괄 디벨로핑 관리자 & 최고경영자
        </Inter20>
      </Col>
      <ManagerWrapper>
        <Blank height="50px" />
        <Col padding={"40px"}>
          <Row gap={"10px"}>
            <Inter80 color={"--hanger-black"} $bold>
              정현민
            </Inter80>
            <Inter50 color={"--hanger-black"} $bold>
              COO/CTO
            </Inter50>
          </Row>
          <Blank height="100px" />
          <Inter20 $bold>
            | 수원고색고등학교-검정고시
            <br />| 백엔드 엔지니어 & 최고운영관리자 & 최고기술관리자
          </Inter20>
        </Col>
      </ManagerWrapper>
      <Blank height="50px" />
      <Col padding={"40px"}>
        <Row gap={"10px"}>
          <Inter80 color={"--hanger-black"} $bold>
            이유비
          </Inter80>
          <Inter50 color={"--hanger-black"} $bold>
            CO-CTO
          </Inter50>
        </Row>
        <Blank height="100px" />
        <Inter20 $bold>
          | 한국디지털미디어고등학교 <br />| 프론트엔드 엔지니어 &
          공동최고기술관리자
        </Inter20>
      </Col>
      <Blank height="300px" />
      <Col align="center">
        <Inter20>
          이 밖에 채용정보를 살펴보려 팀원탭에서 확인 하실수 있습니다.
        </Inter20>
        <Btn>
          <Inter20 color={"--hanger-white"}>팀 탭에서 확인하기</Inter20>
        </Btn>
      </Col>
    </div>
  );
}

const ManagerWrapper = styled.div`
  width: 100%;
  height: 408px;
  background-color: var(--hanger-whiteblue);
`;

const LeadingImage = styled.div`
  width: 100%;
  height: 589px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
`;

const Btn = styled.button`
  width: 279px;
  height: 64px;
  background-color: var(--hanger-brand);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 15px;
`;
