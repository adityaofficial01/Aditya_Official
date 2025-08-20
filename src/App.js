import * as React from "react";
import CustomToast from "./utils/CustomToast";
import SuspenseLoader from "./utils/SuspenseLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";
import ErrorBoundary from "ErrorBoundary";
import useAppQueryClient from "Hook/useAppQueryClient";
import ComingSoon from "components/ComingSoon";

function App() {
  const queryClient = useAppQueryClient();
  const [showLoader, setShowLoader] = React.useState(true);

  // Define routes using createBrowserRouter
  const router = createBrowserRouter(AppRouter)

  // Handle network status changes and reload the page when connection is restored or lost
  React.useEffect(() => {
    console.clear()
    const handleOnline = () => {
      CustomToast("s", "Network connection restored!", "top-center");

      // Get all active queries
      const activeQueries = queryClient.getQueryCache().findAll(query => query.state.isActive);
      console.log("activeQueries", activeQueries)

      // Loop through each active query and set its staleTime to 0
      activeQueries.forEach(query => {
        queryClient.setQueryData(query.queryKey, query.state.data, {
          staleTime: 0, // Set staleTime to 0 for the currently active queries
        });

        // Refetch the query if necessary
        queryClient.refetchQueries(query.queryKey);
      });
    };

    const handleOffline = () => {
      CustomToast("w", "Network connection lost!", "top-center");
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);


  React.useEffect(() => {
    // Keep the SuspenseLoader active for 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    const memory = navigator.deviceMemory;
    console.log(`This device has at least ${memory}GiB of RAM.`);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  console.log("PROCESS", process.env.REACT_APP_ENV_MODE)
  const isProduction = process.env.REACT_APP_ENV_MODE === 'production' ? true : false

  // Render the app with router and error boundary
  return (
    <>
      {showLoader ? (
        <SuspenseLoader />
      ) :
        <ErrorBoundary>
          {isProduction ?
            <ComingSoon />
            :
            <RouterProvider router={router} />
          }
        </ErrorBoundary>}
    </>
  );
}

export default App;