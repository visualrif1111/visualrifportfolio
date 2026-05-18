import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import Home from "./Home";
import MoncksOfDoverStreet from "./MoncksOfDoverStreet";
import Swiftrooms from "./Swiftrooms";
import SunilGavaskar from "./SunilGavaskar";
import DiversionAudio from "./DiversionAudio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects/moncks-of-dover-street", Component: MoncksOfDoverStreet },
      { path: "projects/swiftrooms", Component: Swiftrooms },
      { path: "projects/sunil-gavaskar", Component: SunilGavaskar },
      { path: "projects/diversion-audio", Component: DiversionAudio },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);