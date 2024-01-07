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

  const renderObjectCodeContent = (content: TabObjectCodeContent) => {
    return (
      <div>
        <h1 className="text-5xl text-branding">{content.code}</h1>
        <h4 className="text-3xl text-[#06BF59]">Time left {content.time}</h4>
        <p className="text-2xl font-semibold">{content.description}</p>
      </div>
    );
  };

  const selectContent = (
    content: TabObjectContent[] | TabObjectCodeContent | string
  ) => {
    console.log("content", content);
    if (typeof content === "string") {
      return renderContent(content);
    }
    if (Array.isArray(content)) {
      return renderObjectContent(content);
    }
    if ("code" in content) {
      return renderObjectCodeContent(content);
    }
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
            {selectContent(tab.content)}
          </TabPane>
        ))}
      </Tabs>
    </ConfigProvider>
  );
};

export default TabComponent;
