import { Suspense, lazy } from "react";
import Loader from "../custom/loader/main";

const Main = lazy(() => import("../components/home"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
};

export default Home;
