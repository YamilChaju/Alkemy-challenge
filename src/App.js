import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Page from "./components/page/Page";
import NotFound from "./components/notFound/NotFound";

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

function App() {
  return (
    <div style={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/page" element={<Page />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
