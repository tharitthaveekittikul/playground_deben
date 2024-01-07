type TabComponentProps = {
  tabs: {
    title: string;
    content: string | TabObjectContent[] | TabObjectCodeContent;
    key: string;
  }[];
};

type TabObjectContent = {
  imageSrc: string;
  couponName: string;
  idCoupon: string;
  description: string;
};

type TabObjectCodeContent = {
  code: string;
  idCoupon: string;
  description: string;
  time: string;
};
