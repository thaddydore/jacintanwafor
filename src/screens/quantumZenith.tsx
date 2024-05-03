import { Suspense, lazy } from "react";
import Loader from "../custom/loader/main";

const Main = lazy(() => import("../components/quantumZenith"));

const QuantumZenith = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
};

export default QuantumZenith;
