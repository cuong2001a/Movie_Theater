import React from "react";
import SwiperCutom from "../../components/SwiperCustom";
import { LIST_IMAGES } from "../../constant";
import CommingMovie from "./components/CommingMovie";
import CurrentMovie from "./components/CurrentMovie";

const Home: React.FC = () => {
  return (
    <>
      <SwiperCutom list={LIST_IMAGES} navigation />
      <CurrentMovie />
      <CommingMovie />
    </>
  );
};

export default Home;
