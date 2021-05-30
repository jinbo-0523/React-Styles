import styled from "styled-components";
// ここのstyledは変数名なのでなんでもOK

export const StyledComponent = () => {
  return (
    <Container>
      <Title>StyledComponent</Title>
      <p>component内でDependenciesのstyled-components追加</p>
      <p>styled-componentswoをimportする</p>
      <p>同コンポーネント内にスタイルを記述</p>
      <p>return内のタグ名を変数に置き換える</p>
      <Button>Fight!!!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover{
    background-color: #46ccef;
    color:#fff;
`;
