import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoaderProvider } from "@/context/LoaderContext";

createRoot(document.getElementById("root")!).render(
  <LoaderProvider>
    <App />
  </LoaderProvider>
);
