import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import Home from "./Home";
import MoncksOfDoverStreet from "./MoncksOfDoverStreet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects/moncks-of-dover-street", Component: MoncksOfDoverStreet },
    ],
  },
]);