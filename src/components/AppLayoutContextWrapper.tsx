import React from "react";
import AppLayout from "./AppLayout";
import { ErrorBoundary } from "react-error-boundary";
// import NotFound from './NotFound';
import { useNavigate } from "react-router-dom";
import "../../styles/variables.scss";
import { Analytics } from "@vercel/analytics/react";

interface Props {
  children: any;
}

type MyFallbackComponentProps = {
  error: any;
};

const AppLayoutContextWrapper: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const MyFallbackComponent: React.FC<MyFallbackComponentProps> = ({
    error,
  }) => {
    return (
      <div className="errorLog">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={navigateToHome}> Home Page</button>
      </div>
    );
  };

  return (
    <div>
      <ErrorBoundary FallbackComponent={MyFallbackComponent}>
        <AppLayout>
          {children}
          <Analytics />
        </AppLayout>
      </ErrorBoundary>
    </div>
  );
};
export default AppLayoutContextWrapper;
