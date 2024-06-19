import styled from "styled-components";

interface WidthAndHeight {
  width?: string;
  height?: string;
}

interface Flex {
  justify?: string;
  align?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  alignContent?: string;
}

interface RowAndCol extends Flex, WidthAndHeight {}

export const Row = styled.div<RowAndCol>`
  display: flex;
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) => props.padding && `padding: ${props.padding}`}
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

export const Col = styled(Row)`
  flex-direction: column;
`;

export const Blank = styled.div<WidthAndHeight>`
  ${(p) => p.width && `width: ${p.width}`}
  ${(p) => p.height && `height: ${p.height}`}
`;

export const Wrap = styled(Row)`
  flex-wrap: wrap;
  ${(p) => p.alignContent && `align-content: ${p.alignContent}`}
`;
