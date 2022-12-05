import React from "react";
import { LIST_THREATER } from "../../constant";
import { Theater_Item } from "../../constant/models";
import classes from "./about.module.scss";

const About: React.FC = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.theater_system}>
          <h3 className={classes.title}>Hệ thống rạp</h3>
          <div className={classes.list_theater}>
            {LIST_THREATER?.map((item: Theater_Item, index) => {
              return (
                <div className={classes.item_theater} key={index}>
                  <img className={classes.img_poster} src={item.img} alt="" />
                  <p className={classes.name_theater}>{item.tilte}</p>
                  <div className={classes.item_bottom}>
                    <span className={classes.like}>{item.like} Thích</span>
                    <a href="#!" className={classes.btn_share}>
                      Chia sẻ
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
