import React, { Suspense } from 'react'
import { RouterKeys } from "./RouterKey";
import Home from 'screens/Landing/Home';
import NoDataFound from 'components/NoDataFound';

// Lazy load components
const Projects = React.lazy(() => import("../screens/Projects/projects")); 

export const AppRouter = [
  {
    path: RouterKeys.HOME.HOME,
    element: <Home />,
  },
  {
    path: RouterKeys.HOME.PROJECTS,
    element: (
      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NoDataFound />
      </Suspense>
    ),
  },
];
