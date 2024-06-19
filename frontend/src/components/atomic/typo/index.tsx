import styled from "styled-components";

type TypoType = {
  color?: string;
  $bold?: boolean;
  hover?: {
    color?: string;
    weight?: string;
  };
  activated?: boolean;
};

const Typo = styled.div<TypoType>`
  color: ${(p) => (p.color ? `var(${p.color})` : `var(--hanger-gray)`)};
  word-break: break-all;
  font-style: normal;
  font-family: Inter;

  &:hover {
    ${(p) =>
      p.hover &&
      `
        cursor: pointer;
        ${p.hover.color && `color: var(${p.hover.color});`}
        ${p.hover.weight && `weight: var(${p.hover.weight});`}
    `}
  }
`;

export const Inter80 = styled(Typo)`
  font-size: 80px;
  font-weight: ${(p) => (p.$bold ? "700" : "500")};
  line-height: 40px;
`;

export const Inter50 = styled(Typo)`
  font-size: 50px;
  font-weight: ${(p) => (p.$bold ? "700" : "500")};
  color: ${(p) => p.activated && `var(--hanger-gray)`};
  line-height: 40px;
`;

export const Inter25 = styled(Typo)`
  font-size: 25px;
  font-weight: ${(p) => (p.$bold ? "700" : "500")};
  line-height: 40px;
`;

export const Inter20 = styled(Typo)`
  font-size: 20px;
  font-weight: ${(p) => (p.$bold ? "700" : "500")};
  line-height: 40px;
`;
