import React from "react";
import { Card, ConfigProvider } from "antd";

function CouponCard({
  imageSrc,
  couponName,
  idCoupon,
  description,
}: TabObjectContent) {
  return (
    <ConfigProvider
      theme={{
        token: {
          paddingLG: 0,
        },
      }}
    >
      <Card className="flex items-center border border-gray-200 rounded-lg shadow-md overflow-hidden my-4">
        <div className="flex">
          <img
            src={imageSrc}
            alt={couponName}
            className="w-[120px] h-[136px] object-cover"
          />
          <div className="ml-4 pt-2">
            <h3 className="text-lg font-semibold">{couponName}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </Card>
    </ConfigProvider>
  );
}

export default CouponCard;
