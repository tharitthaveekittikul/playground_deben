import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TabMUIComponent from "../components/TabMUIComponent";

function CouponDetails() {
  const navigate = useNavigate();
  const params = useParams() as { id: string };
  const [tabs, setTabs] = useState<TabComponentProps["tabs"]>([
    {
      title: "Discription",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      key: "1",
    },
    {
      title: "Condition",
      content:
        "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      key: "2",
    },
  ]);
  return (
    <div>
      <img
        src="https://resources.matcha-jp.com/resize/720x2000/2019/04/05-74420.webp"
        className="h-56 object-cover w-full"
      />
      <div className="p-4">
        <h1 className="text-3xl font-medium">Starbucks</h1>
        <h2 className="text-2xl font-medium">Discount coupon 100 Baht</h2>
        <div className="h-[1px] bg-slate-300 my-2"></div>
        <p className="text-black-100 text-xl ">Valid until: 01 March 2024</p>
        <div className="h-[1px] bg-slate-300 my-2"></div>
      </div>
      <TabMUIComponent tabs={tabs} />
      <div className="m-4">
        <button
          className="bg-branding text-divider text-2xl rounded-[4px] px-4 py-[10px] w-full"
          onClick={() => {
            navigate(`/coupon-redeem`);
          }}
        >
          Redeem
        </button>
      </div>
    </div>
  );
}

export default CouponDetails;
