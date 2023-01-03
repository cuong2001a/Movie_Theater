import React from "react";
import classes from "./style.module.scss";
import { ImLocation2 } from "react-icons/im";
import DetailTheater from "./DetailTheater";
const ListTheater: React.FC = () => {
  const city = ["Thành phố Hồ Chí Minh", "Hà Nội", "Hải Phòng", "Huế"];

  const renderCity = () => {
    return (
      <>
        {city?.map((item, index) => (
          <div className={classes.item_theater}>
            <ImLocation2 />
            <span className={classes.text}>{item}</span>
          </div>
        ))}
      </>
    );
  };
  return (
    <React.Fragment>
      <div className={classes.list_theater}>{renderCity()}</div>
      <DetailTheater />
    </React.Fragment>
  );
};
ListTheater.propTypes = {};
export default ListTheater;
