import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Route";


createRoot(document.getElementById("root")).render(<AppRouter/>);