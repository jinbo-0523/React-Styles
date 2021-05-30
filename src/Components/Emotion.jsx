/** @jsxRuntime classic*/
/** @jsx jsx*/
import { jsx, css } from "@emotion/react";
// タグにCSSを挟む形式

import styled from "@emotion/styled";
//
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <p>Emotionは柔軟な書き方ができる</p>
      <Button>Fihght!!!</Button>
    </div>
  );
};
const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover{
    background-color: #46ccef;
    color:#fff;
  `;
