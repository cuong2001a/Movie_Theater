import React from "react";
import classes from "./footer.module.scss";
import { FaAngleDoubleRight, FaFacebook } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className={classes.footer_element}>
          <div className={classes.item}>
            <ul>
              <li>
                <h1 className={classes.item_title}>Điều khoản</h1>
                <ul className={classes.item_content}>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    {""}
                    <span>Điều khoản chung</span>
                  </li>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    {""}
                    <span>Điều khoản giao dịch</span>
                  </li>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    {""}
                    <span>Chính sách thanh toán</span>
                  </li>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    {""}
                    <span>Chính sách bảo mật</span>
                  </li>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    <span>Câu hỏi thương gặp</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={classes.item}>
            <ul>
              <li>
                <h1 className={classes.item_title}>Kết nối BHD Star</h1>
                <ul className={classes.item_logo}>
                  <li>
                    <Link
                      target="_blank"
                      to={"https://www.facebook.com/BHDStar"}
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to={"https://www.youtube.com/c/BHDStar"}
                    >
                      <SiYoutube color="red" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to={"https://www.instagram.com/bhdstar.cineplex/"}
                    >
                      <BsInstagram color="pink" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to={"https://zalo.me/1884424922722396289"}
                    >
                      <BsTwitter color="cyan" />
                    </Link>
                  </li>
                </ul>
                <img
                  src="https://bhdstar-vn.herokuapp.com/static/media/chungnhanbocongthuong.cb85045e.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className={classes.item}>
            <ul>
              <li>
                <h1 className={classes.item_title}>Chăm sóc khách hàng</h1>
                <ul className={classes.item_content}>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    {""}
                    <span>HOTLINE: 1900 1006 </span>
                  </li>
                  <li className={classes.item_text}>
                    <FaAngleDoubleRight />
                    {""}
                    <span>
                      Giờ làm việc 8:00 - 22:00 (Tất cả các ngày bao gồm lễ){" "}
                    </span>
                  </li>
                </ul>
              </li>
              <li className={classes.contact}>
                Email Hỗ trợ: CGV.CINEMA.VN@Gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
