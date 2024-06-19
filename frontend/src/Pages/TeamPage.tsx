import styled from "styled-components";
import { Blank, Col, Inter20, Inter50, Inter80 } from "../components/atomic";

export default function Team() {
  return (
    <div>
      <TeamImage />
      <Col align="center">
        <Blank height="600px" />
        <AlertBox>
          <Inter20 color={"--hanger-red"} style={{ padding: "0 0 0 40px" }}>
            현재는 직원을 추가채용하지 않습니다. 하지만 하단에서 채용정보를
            확인하실 수 있습니다.
          </Inter20>
        </AlertBox>
      </Col>
      <Inter50 color="--hanger-brand" $bold>
        팀원
      </Inter50>
      <Inter80 color="--hanger-black" $bold>
        채용 정보 및 지원자격
      </Inter80>
    </div>
  );
}

const TeamImage = styled.div`
  width: 100%;
  height: 589px;
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
`;

const AlertBox = styled.div`
  border-radius: 15px;
  background: #fdc7c7;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  width: 1286px;
  height: 62px;
  display: flex;
  align-items: center;
`;
