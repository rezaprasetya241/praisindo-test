import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((item, key) => (
            <Route key={key} element={item.element} path={item.path} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
