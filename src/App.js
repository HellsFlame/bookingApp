import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<Hotels/>}></Route>
        <Route path="/hotels/:id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
