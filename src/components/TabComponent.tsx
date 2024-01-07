import { ConfigProvider, Tabs } from "antd";
import CouponCardMUI from "./CouponCardMUI";

const TabComponent = ({ tabs }: TabComponentProps) => {
  const { TabPane } = Tabs;

  const renderContent = (content: string) => {
    return (
      <div className="">
        <p>{content}</p>
      </div>
    );
  };

  const renderObjectContent = (contents: TabObjectContent[]) => {
    return (
      <div>
        <h1 className="text-2xl font-semibold">สิทธิพิเศษของคุณ</h1>
        {contents.map((content: TabObjectContent) => (
          <CouponCardMUI
            key={content.idCoupon}
            imageSrc={content.imageSrc}
            couponName={content.couponName}
            idCoupon={content.idCoupon}
            description={content.description}
          />
        ))}
      </div>
    );
  };
  const tabWidth = 100 / tabs.length;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7631C1",
          fontSize: 18,
          lineWidth: 2,
        },
        components: {
          Tabs: {
            inkBarColor: "#7631C1",
          },
        },
      }}
    >
      <Tabs
        defaultActiveKey={tabs[0]?.key}
        tabBarStyle={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
        tabBarGutter={0}
      >
        {tabs.map((tab) => (
          <TabPane
            tab={
              <div className={`text-center w-[${tabWidth}vw]`}>{tab.title}</div>
            }
            key={tab.key}
          >
            {typeof tab.content === "string"
              ? renderContent(tab.content)
              : renderObjectContent(tab.content)}
          </TabPane>
        ))}
      </Tabs>
    </ConfigProvider>
  );
};

export default TabComponent;
