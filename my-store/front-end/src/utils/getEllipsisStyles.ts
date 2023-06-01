import { css } from "styled-components";

const overflowEllipsesLines = (lineClamp: number) => {
  if (lineClamp >= 2)
    return css`
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: initial;
    `;

  return css`
    white-space: nowrap;
  `;
};

export const getStyleOverflowEllipses = (lineClamp = 2) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  ${overflowEllipsesLines(lineClamp)}
`;
