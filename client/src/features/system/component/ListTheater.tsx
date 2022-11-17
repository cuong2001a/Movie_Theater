import React from "react"
import classes from "./style.module.scss"
import {IoLocationSharp} from "react-icons/io5"
import {itemTheater, listTheater} from "../constant"
const ListTheater: React.FC = () => {
  const city = ["Thành phố Hồ Chí Minh", "Hà Nội", "Hải Phòng", "Huế"]
  return (
    <React.Fragment>
      <ul className={classes.list_city}>
        {city?.map((item: string, index: number) => {
          return (
            <li key={index} className={classes.item}>
              <a href="#" className={classes.item_link}>
                <IoLocationSharp />
                <span>{item}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div className={classes.list_theater}>
        {listTheater?.map((item: itemTheater, index: number) => {
          return (
            <div key={index} className={classes.item_theater}>
              <a href={item.url} className={classes.inside}>
                <h3 className={classes.title}>{item?.title}</h3>
                <p>{item?.address}</p>
              </a>
              <a href={item.url} className={classes.btn_location}>
                <IoLocationSharp />
                <span>Xem</span>
              </a>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
ListTheater.propTypes = {}
export default ListTheater
