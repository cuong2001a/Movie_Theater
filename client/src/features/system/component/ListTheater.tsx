import React from "react";
import classes from "./style.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { IItemTheater, LIST_THREATER } from "../constant";
import { ImLocation2 } from "react-icons/im";
const ListTheater: React.FC = () => {
  const city = ["Thành phố Hồ Chí Minh", "Hà Nội", "Hải Phòng", "Huế"];

  const renderCity = () => {
    return (
      <>
        {city?.map((item, index) => (
          <div className={classes.item_theater}>
            <ImLocation2 />
            <span>{item}</span>
          </div>
        ))}
      </>
    );
  };
  return (
    <React.Fragment>
      <div className={classes.list_theater}>{renderCity()}</div>
    </React.Fragment>
  );
};
ListTheater.propTypes = {};
export default ListTheater;
