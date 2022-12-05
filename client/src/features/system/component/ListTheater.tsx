import React from "react";
import classes from "./style.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { IItemTheater, LIST_THREATER } from "../constant";
const ListTheater: React.FC = () => {
  const city = ["Thành phố Hồ Chí Minh", "Hà Nội", "Hải Phòng", "Huế"];
  return (
    <React.Fragment>
      <div>List Threater</div>
    </React.Fragment>
  );
};
ListTheater.propTypes = {};
export default ListTheater;
