import React, { useCallback, useState } from "react";
import classes from "./detailMovie.module.scss";
import Grid from "@mui/material/Grid";

interface DetailTheater {
  name: String;
  content: String;
}
interface DetailTheaterProps {
  onSelected: any;
  onClickLocationItem: any;
}

type Key = Number | null;
const DetailTheater = ({
  onSelected,
  onClickLocationItem,
}: DetailTheaterProps) => {
  const [active, setActive] = useState<Number | null>(null);
  const listTheater = [
    {
      name: "BHD Star 3.2",
      content: "Lầu 5 siêu thị Vincome Bà Triệu",
    },
    {
      name: "BHD Star 3.2",
      content: "Lầu 5 siêu thị Vincome Bà Triệu",
    },
    {
      name: "BHD Star 3.2",
      content: "Lầu 5 siêu thị Vincome Bà Triệu",
    },
    {
      name: "BHD Star 3.2",
      content: "Lầu 5 siêu thị Vincome Bà Triệu",
    },
  ];

  const handleActive = useCallback((index: Key) => {
    setActive(index);
    onClickLocationItem();
    onSelected(index);
  }, []);

  return (
    <React.Fragment>
      <Grid
        style={{ marginTop: "30px", marginBottom: "30px" }}
        container
        spacing={2}
      >
        {listTheater?.map((item: DetailTheater, index: Key) => {
          return (
            <Grid item xs={3} md={3}>
              <div
                className={active === index ? classes.box_active : classes.box}
                onClick={() => handleActive(index)}
              >
                <div className={classes.body}>
                  <p className={classes.title}>{item?.name}</p>
                  <div className={classes.content}>
                    <p className={classes.content_text}>{item?.content}</p>
                  </div>
                </div>
                <button
                  className={
                    active === index ? classes.btn_active : classes.btn
                  }
                >
                  Xem
                </button>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
export default DetailTheater;
