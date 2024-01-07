import React, { useState } from "react";
import TabMUIComponent from "../components/TabMUIComponent";

function CouponRedeem() {
  const [tabs, setTabs] = useState<TabComponentProps["tabs"]>([
    {
      title: "BAR CODE",
      content: {
        code: "12345678901",
        idCoupon: "789",
        description:
          "Your code is lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        time: "22:23:00:01",
      },
      key: "1",
    },
    {
      title: "QR CODE",
      content: {
        code: "12345678902",
        idCoupon: "789",
        description:
          "Your code is lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        time: "22:23:00:01",
      },
      key: "2",
    },
    {
      title: "CODE",
      content: {
        code: "12345678903",
        idCoupon: "789",
        description:
          "Your code is lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        time: "22:23:00:01",
      },
      key: "3",
    },
  ]);
  return (
    <div>
      <div className="flex flex-col items-center m-4">
        <p className="text-2xl font-medium">
          Starbuck - Discount coupon 100 Baht
        </p>
        <p className="text-xl font-normal">01 Jan 2024 15:45</p>
        <div className="h-[1px] bg-slate-300 mt-2 w-full"></div>
      </div>
      <TabMUIComponent tabs={tabs} />
    </div>
  );
}

export default CouponRedeem;
