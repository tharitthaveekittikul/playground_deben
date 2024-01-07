import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import ModalComponent from "../components/ModalComponent";
import TabMUIComponent from "../components/TabMUIComponent";
import ProfileCardMUI from "../components/ProfileCardMUI";

function HomePrivilege() {
  const [firstName, setFirstName] = useState<string>("John");
  const [tabs, setTabs] = useState<TabComponentProps["tabs"]>([
    {
      title: "ENABLE",
      content: [
        {
          imageSrc: "https://via.placeholder.com/150",
          couponName: "Coupon A",
          idCoupon: "123",
          description: "Description of Coupon A",
        },
        {
          imageSrc: "https://via.placeholder.com/150",
          couponName: "Coupon B",
          idCoupon: "123",
          description: "Description of Coupon A",
        },
        {
          imageSrc: "https://via.placeholder.com/150",
          couponName: "Coupon C",
          idCoupon: "123",
          description: "Description of Coupon A",
        },
      ],
      key: "1",
    },
    {
      title: "USED",
      content: [
        {
          imageSrc: "https://via.placeholder.com/150",
          couponName: "Coupon B",
          idCoupon: "456",
          description: "Description of Coupon B",
        },
      ],
      key: "2",
    },
    {
      title: "EXPIRED",
      content: [
        {
          imageSrc: "https://via.placeholder.com/150",
          couponName: "Coupon B",
          idCoupon: "456",
          description: "Description of Coupon B",
        },
      ],
      key: "3",
    },
  ]);

  const [showAlert, setShowAlert] = useState<boolean>(false);
  return (
    <div>
      <div className="bg-slate-200 p-4">
        <ProfileCardMUI name={firstName} />
        {/* <ProfileCard name={firstName} /> */}
      </div>
      {/* <TabComponent tabs={tabs} /> */}
      <TabMUIComponent tabs={tabs} />

      <button onClick={() => setShowAlert(true)}>Show Alert</button>
      {showAlert && (
        <ModalComponent
          message="Coupon code has expired"
          description="Information not available, please try again later."
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default HomePrivilege;
