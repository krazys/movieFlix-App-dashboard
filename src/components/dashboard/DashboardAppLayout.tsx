import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardAppLayout: React.FC<Props> = ({ children }) => {
  return <div className="dashboardAppLayoutWrapper">{children}</div>;
};

export default DashboardAppLayout;
