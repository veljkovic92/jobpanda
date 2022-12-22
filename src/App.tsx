import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<h1>Jobs</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
