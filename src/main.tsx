import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QueryRegistry from "./api/registry/QueryRegistry.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryRegistry>
      <App />
    </QueryRegistry>
  </StrictMode>
);
