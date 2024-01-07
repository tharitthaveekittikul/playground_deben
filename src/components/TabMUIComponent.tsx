import { Box, Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";

import React, { useState } from "react";
import { theme } from "../utils/theme";
import CouponCardMUI from "./CouponCardMUI";
import { instanceOf } from "prop-types";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

const TabMUIComponent = ({ tabs }: TabComponentProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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
      <div className="flex flex-col items-center m-4">
        <h1 className="text-5xl text-branding font-bold mb-12">
          {content.code}
        </h1>
        <h4 className="text-3xl text-[#06BF59] mb-4">
          Time left {content.time}
        </h4>
        <p className="text-xl">{content.description}</p>
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

  return (
    <div className="pb-4 mt-4">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#7631C1",
              },
            }}
            sx={{
              "& .MuiTabs-flexContainer": { width: "100%" },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                value={index}
                label={tab.title}
                sx={{
                  flexGrow: 1,
                  fontSize: "18px",
                  "&.Mui-selected": {
                    color: "#7631C1",
                    fontWeight: "bold",
                  },
                }}
              />
            ))}
          </Tabs>
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={selectedTab} index={index}>
              {selectContent(tab.content)}
            </TabPanel>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TabMUIComponent;
