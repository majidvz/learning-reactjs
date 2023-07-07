import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import { Header } from "./components";
import { AppContainer } from "./app-styles";

function App() {
  return (
    <AppContainer className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
