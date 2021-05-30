// ライブラリなしのデフォルトで入っているスタイルの当て方
export const InlineStyle = () => {
  const containerStyle = {
    //記述内容はJSで。ハイフン使わず、プロパティを""で囲う
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const title = {
    margin: 0,
    color: "#3d84"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={title}>- Inline Styles -</p>
      <p>宣言してスタイルを作成・当てていく</p>
      <button style={buttonStyle}>Fight!!!</button>
    </div>
  );
};
