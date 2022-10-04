import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/views/login/Login";
import Listing from "./components/views/listing/Listing";
import NotFound from "./components/views/notFound/NotFound";
import Layout from "./components/layout/Layout";

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
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
