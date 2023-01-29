import {
  Button,
  Divider,
  Grid,
  iconClasses,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import classes from "./LocationDetail.module.scss";
interface ILocationDetail {
  location: number | undefined;
}

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const LocationDetail = ({ location }: ILocationDetail) => {
  const data = [
    {
      sourceImg:
        "http://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002394?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
      type: "3D",
      translation: "EN",
      movie: "Nhà tiên nữ",
      location: "BHD Star 3.2",
      time: ["08:00 AM", "11:30 AM", "16:00 PM", "18:00 PM"],
    },
    {
      sourceImg:
        "http://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002394?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
      type: "3D",
      translation: "SUB",
      movie: "Nhà tiên nữ",
      location: "BHD Star 3.2",
      time: ["08:00 AM", "11:30 AM", "16:00 PM", "18:00 PM"],
    },
    {
      sourceImg:
        "http://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002394?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
      type: "3D",
      translation: "SUB",
      movie: "Nhà tiên nữ",
      location: "BHD Star 3.2",
      time: ["08:00 AM", "11:30 AM", "16:00 PM", "18:00 PM"],
    },
  ];
  return (
    <>
      <form className={classes.container}>
        <Grid container spacing={2}>
          <Grid className={classes.item_filter} item xs={5}>
            <label htmlFor="date" className={classes.label}>
              Ngày giờ :
            </label>
            <TextField
              id="date"
              type="date"
              sx={{ width: 250 }}
              className={classes.textField}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>
          <Grid className={classes.item_filter} item xs={5}>
            <label htmlFor="date" className={classes.label}>
              Tên phim :
            </label>
            <TextField
              id="name"
              type="text"
              placeholder="Nhập tên phim"
              sx={{ width: 250 }}
              className={classes.textField}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>
          <Grid
            className={classes.item_filter}
            item
            xs={2}
            alignSelf={"flex-end"}
            justifyContent={"center"}
          >
            <Button variant="contained">Tìm kiếm</Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={2} className={classes.container}>
        {data?.map((item, index) => (
          <>
            <Grid item xs={3}>
              <Img alt="image" src={item.sourceImg} />
            </Grid>
            <Grid item xs={9}>
              <div className={classes.content_film}>
                <div className={classes.content_film_type}>
                  <span className={classes.type_text}>
                    {item.type} <br />
                    {item.translation}
                  </span>
                </div>
                <div className={classes.content_film_info}>
                  <h3 className={classes.name}>{item.movie}</h3>
                  <p className={classes.location}>{item.location}</p>
                  <div className={classes.time}>
                    {item?.time?.map((item: string, index: number) => {
                      return (
                        <span key={index} className={classes.time_text}>
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default LocationDetail;
