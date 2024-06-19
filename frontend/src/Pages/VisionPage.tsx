import styled from "styled-components";
import Vid from "../components/video";
import "../index.css";
import { data } from "../components/visiondata";
import { useState } from "react";
import { Blank, Inter25, Inter50, Inter80 } from "../components/atomic";

const VisionPage = () => {
  const [year, setYear] = useState(2024);
  return (
    <Wrapper>
      <Vid />
      <Blank height={"600px"} />
      <VisionNav>
        <Inter80 color={"--hanger-brand"} $bold>
          비전
        </Inter80>
        <Inter50
          onClick={() => setYear(2024)}
          $bold
          color={year == 2024 ? "--hanger-black" : "--hanger-gray"}
        >
          2024
        </Inter50>
        <Inter50
          onClick={() => setYear(2025)}
          $bold
          color={year == 2025 ? "--hanger-black" : "--hanger-gray"}
        >
          2025
        </Inter50>
        <Inter50
          onClick={() => setYear(2026)}
          $bold
          color={year == 2026 ? "--hanger-black" : "--hanger-gray"}
        >
          2026
        </Inter50>
        <Inter50
          onClick={() => setYear(2027)}
          $bold
          color={year == 2027 ? "--hanger-black" : "--hanger-gray"}
        >
          2027
        </Inter50>
      </VisionNav>
      <VisionWrapper>
        {data[year - 2024].map((v, i) => (
          <Inter25
            key={i}
            color={v.blue ? "--hanger-brand" : "--hanger-black"}
            $bold
          >
            {v.detail}
          </Inter25>
        ))}
      </VisionWrapper>
    </Wrapper>
  );
};

const VisionWrapper = styled.div`
  margin-top: 100px;
  width: 1101px;
  padding: 56px 63px 47px 47px;
  background-color: var(--hanger-whiteblue);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const VisionNav = styled.div`
  display: flex;
  gap: 64px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default VisionPage;
