import styled from "styled-components";
import { Inter20, Inter25 } from "./atomic";

export default function Footer() {
  return (
    <FooterBar>
      <Item1>
        <Inter25 $bold>랜딩페이지 로드맵</Inter25>
        <Inter20>| 메뉴</Inter20>
        <Inter20>| 비전</Inter20>
        <Inter20>| 경영진</Inter20>
        <Inter20>| 팀</Inter20>
        <Inter20>| 베타테스터 신청</Inter20>
      </Item1>
      <Item2>
        <Inter25 $bold>이용약관 및 문서</Inter25>
        <Inter20>| 개인정보 수집 및 이용 목적</Inter20>
        <Inter20>| 퇴사자 지원 프로토콜</Inter20>
        <Inter20>| 동료평가지 양식</Inter20>
      </Item2>
      <Item3>
        <Inter25 $bold>SNS</Inter25>
        <img src="../assets/sns/IG.png" />
      </Item3>
      <Item4>
        <Inter25 $bold>다운로드</Inter25>
      </Item4>
      <Item5>
        <Inter25 $bold>결제 방식</Inter25>
      </Item5>
      <Item6>
        <Inter25 $bold>결제지원 카드사</Inter25>
      </Item6>
    </FooterBar>
  );
}

const FooterBar = styled.div`
  width: 100%;
  height: 795px;
  background-color: var(--hanger-whiteblue);
  border-radius: 30px 30px 0 0;
  margin-top: 400px;
  display: grid;
  grid-template-areas:
    "item1 item3 item4"
    "item1 item5 item5"
    "item2 item6 item6";
  padding: 100px;
`;

const Item1 = styled.div`
  grid-area: item1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item2 = styled.div`
  grid-area: item2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item3 = styled.div`
  grid-area: item3;
`;

const Item4 = styled.div`
  grid-area: item4;
`;

const Item5 = styled.div`
  grid-area: item5;
`;

const Item6 = styled.div`
  grid-area: item6;
`;
