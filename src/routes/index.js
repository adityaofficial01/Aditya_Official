import React from 'react'
import { RouterKeys } from "./RouterKey";
import ErrorBoundary from "ErrorBoundary";
import CommonLayout from "layouts/CommonLayout";
import Home from 'screens/Landing/Home';

// Lazy load components

// 404
const NotFound = React.lazy(() => import("NotFound"));

// *************** Protected Routes ***************

// COMMON
const Terms = React.lazy(() => import("screens/common/Terms"));
const Privacy = React.lazy(() => import("screens/common/Privacy"));



export const AppRouter = [
  // Common (Terms & Privacy)
  {
    element:
      <ErrorBoundary>
        <CommonLayout />
      </ErrorBoundary>,
    children: [
      {
        path: RouterKeys.COMMON.TERMS,
        element: <Terms />,
      },
      {
        path: RouterKeys.COMMON.PRIVACY,
        element: <Privacy />,
      },
    ],
  },

  // Auth Routes
  {
    path: RouterKeys.HOME.HOME,
    element: <Home />,
  },


  // Catch-all Route (404 Not Found)
  {
    path: '*',
    element: (
      <NotFound />
    ),
  },
];
