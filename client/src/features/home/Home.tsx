import React, { useState } from "react";
import Header from "../../components/header/Header";
import CurrentMovie from "./components/CurrentMovie";
import CommingMovie from "./components/CommingMovie";
import Footer from "../../components/footer/Footer";
import classes from "./home.module.scss";
const Home: React.FC = () => {
  const images = [
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/1b8d77de1bf9dea787e8.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/kết-TVC_update.png",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/KV-Artwork-allfooter-1920-1.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-Popcorn.jpg",
  ];
  const [index, setIndex] = useState<Number>(0);
  const renderSlick = () => {
    return (
      <>
        {images?.map((item, e) => {
          return (
            <div
              className={index === e ? classes.block : classes.none}
              style={{ width: "100%", height: "700px" }}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
      </>
    );
  };
  return (
    <React.Fragment>
      <Header />
      <div className={classes.slick_news}>{renderSlick()}</div>
      <CurrentMovie />
      <CommingMovie />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
