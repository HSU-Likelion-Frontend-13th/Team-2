import { Frist } from "./components/First";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Frist />
      <Main />
    </div>
  );
}

export default App;
