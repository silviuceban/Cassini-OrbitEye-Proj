import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Dashboard } from "../pages/dashboard";
import Account from "../pages/account";
import FarmersRecordsTable from "../pages/pastData";

interface RouterElement {
  url: string;
  label?: string;
  icon?: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">>;
  component: () => JSX.Element;
  isProtected: boolean;
}

export const routerElements: RouterElement[] = [
  {
    url: "/",
    label: "Dashboard",
    component: Dashboard,
    isProtected: false,
  },
  {
    url: "/pastData",
    label: "Past Data",
    component: FarmersRecordsTable,
    isProtected: false,
  },

  //   {
  //     url: '*',
  //     component: <></>,
  //     isProtected: false,
  //   },
];

export function RouterItems(): JSX.Element {
  return (
    <Routes>
      {routerElements.map((routerElement: RouterElement) => {
        return (
          <Route
            path={routerElement.url}
            element={<routerElement.component />}
            key={`publicRoute_${routerElement.label}`}
          />
        );
      })}
    </Routes>
  );
}
