export interface ItemRoute {
  path: string;
  element: React.ReactNode;
}

export interface ItemCategory {
  text: string;
  path: string;
  id: number;
}

export interface Theater_Item {
  img: string;
  tilte: string;
  like: number;
}

export interface SettingSlick {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
}

export interface SettingSlickMovie {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  nextArrow: ReactElement;
  prevArrow: ReactElement;
}
