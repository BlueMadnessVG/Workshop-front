import { Route, Routes, useLocation } from "react-router-dom";
import { PublicRoutes } from "./router.config";

import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../components/public/home/home"));
const Something = lazy(() =>
  import("../components/public/something/something")
);

export const AppRouter = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<> LOADING... </>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.SOMETHING} element={<Something />} />

          <Route path="*" element={<div> NOT FOUND </div>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
