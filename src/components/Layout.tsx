import React from "react";
import { Outlet } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Layout() {
  return (
    <div>
      <nav className="sticky top-0 z-10 h-16 flex items-center shadow-lg bg-branding text-divider px-6">
        <KeyboardBackspaceIcon className="cursor-pointer" fontSize="large" />
        {/* <ArrowLeftOutlined className="cursor-pointer text-3xl" /> */}
        <div className="flex-grow text-center">
          <h1 className="text-divider text-2xl font-bold">
            SCBX Debenture Club
          </h1>
        </div>
      </nav>
      <main className="mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
