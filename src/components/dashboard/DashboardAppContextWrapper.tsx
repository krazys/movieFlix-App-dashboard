import React from "react";
import DashboardAppLayout from "./DashboardAppLayout";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DashboardAppContextWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ScopedCssBaseline>
      <DashboardAppLayout>{children}</DashboardAppLayout>
    </ScopedCssBaseline>
  );
};

export default DashboardAppContextWrapper;
