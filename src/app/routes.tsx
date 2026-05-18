import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import Home from "./Home";
import MoncksOfDoverStreet from "./MoncksOfDoverStreet";
import Swiftrooms from "./Swiftrooms";
import SunilGavaskar from "./SunilGavaskar";
import DiversionAudio from "./DiversionAudio";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms";
import GDPR from "./pages/GDPR";
import CookiePolicy from "./pages/CookiePolicy";

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
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-and-conditions", Component: TermsAndConditions },
      { path: "gdpr", Component: GDPR },
      { path: "cookie-policy", Component: CookiePolicy },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);