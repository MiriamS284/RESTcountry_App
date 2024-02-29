import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="country/:name" element={<DetailPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
