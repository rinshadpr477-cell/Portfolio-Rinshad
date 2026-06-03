import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;