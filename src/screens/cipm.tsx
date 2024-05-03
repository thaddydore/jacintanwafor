import { Suspense, lazy } from "react";
import Loader from "../custom/loader/main";

const Main = lazy(() => import("../components/cipm"));

const CIPM = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
};

export default CIPM;
