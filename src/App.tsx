import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import HomePage from "./containers/Home";
import DetailsPage from "./containers/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="details/:characterId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
