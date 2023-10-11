import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeCard from "./components/HomeCard";
import Search from "./components/Search";
import Home from "./routes/Home";

export default function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomeCard />} />
        <Route path="search" element={<Search />} />

        </Route>
      </Routes>
  </BrowserRouter>
  );
}

