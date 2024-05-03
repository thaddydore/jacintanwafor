import { Suspense, lazy } from "react";
import Loader from "../custom/loader/main";

const Main = lazy(() => import("../components/heartfelt"));

const Heartfelt = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
};

export default Heartfelt;
