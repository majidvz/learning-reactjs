import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from "antd";

import { Detail, Home } from "./pages";
import { Header } from "./components";
import { AppContainer } from "./app-styles";

function App() {
  return (
    <AppContainer className="App">
      <BrowserRouter>
        <Header />

        <Alert
          style={{ marginBottom: 16, marginTop: 16 }}
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
