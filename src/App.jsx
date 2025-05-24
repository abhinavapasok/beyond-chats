import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IntercomAdminPanel from "./componets/IntercomAdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntercomAdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;