import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}
