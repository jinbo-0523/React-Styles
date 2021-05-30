import { InlineStyle } from "./Components/InlineStyle";
import { CssModules } from "./Components/CssModules";
import "./styles.css";
import { StyledJsx } from "./Components/StyledJsx";
import { StyledComponent } from "./Components/StyledComponent";
import { Emotion } from "./Components/Emotion";

export default function App() {
  return (
    <div className="App">
      <div>hoverが効くか試してみよう</div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </div>
  );
}
