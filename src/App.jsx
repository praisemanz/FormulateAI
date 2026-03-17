import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Form from "./pages/form";
import UploadForm from "./pages/loading";
import Dashboard from "./pages/dashboard";
import Submission from "./pages/submission";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="loading" element={<UploadForm />} />
          <Route path="form" element={<Form />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="submission" element={<Submission />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
