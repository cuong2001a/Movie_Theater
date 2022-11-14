import {ReactElement} from "react"
import About from "../features/about/About"
import Home from "../features/home/Home"
import Register from "../features/register/Register"
import Search from "../features/search/Search"
import SignIn from "../features/signin/SignIn"
import SystemCinema from "../features/system/SystemCinema"

export interface itemRoute {
  path: string
  element: React.ReactNode
}

export interface itemCategory {
  text: string
  path: string
  id: number
}

export interface Theater_Item {
  img: string
  tilte: string
  like: number
}

export const listRoute: itemRoute[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/system-cinema",
    element: <SystemCinema />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]

export const listCategory: itemCategory[] = [
  {
    text: "Trang chủ",
    path: "/",
    id: 1,
  },
  {
    text: "Hệ thống rạp phim",
    path: "/about",
    id: 2,
  },
  {
    text: "Lịch chiếu",
    path: "/system-cinema",
    id: 3,
  },
  {
    text: "Khuyễn mãi",
    path: "/search",
    id: 4,
  },
]

export const listTheater: Theater_Item[] = [
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR LONG KHÁNH",
    like: 100,
  },
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR THE GARDEN",
    like: 100,
  },
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR DISCOVERY",
    like: 100,
  },
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR HUẾ",
    like: 100,
  },
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR PHẠM NGỌC THẠCH",
    like: 100,
  },
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR LÊ VĂN VIỆT",
    like: 100,
  },
  {
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg",
    tilte: "BHD STAR QUANG TRUNG",
    like: 100,
  },
]
export interface settingSlick {
  dots: boolean
  infinite: boolean
  speed: number
  slidesToShow: number
  slidesToScroll: number
  initialSlide: number
}

export interface settingSlickMovie {
  infinite: boolean
  speed: number
  slidesToShow: number
  slidesToScroll: number
  nextArrow: ReactElement
  prevArrow: ReactElement
}
