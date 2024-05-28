import { Suspense, lazy } from "react";
import Loader from "../custom/loader/main";

const Main = lazy(() => import("../components/about"));

const About = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
};

export default About;
