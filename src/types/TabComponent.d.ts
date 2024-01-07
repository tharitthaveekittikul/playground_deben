type TabComponentProps = {
  tabs: { title: string; content: string | TabObjectContent[]; key: string }[];
};

type TabObjectContent = {
  imageSrc: string;
  couponName: string;
  idCoupon: string;
  description: string;
};
