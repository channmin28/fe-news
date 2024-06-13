import React from "react";
import ReactDOM from "react-dom/client";
import viVN from "antd/locale/vi_VN";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./lib/react-query";
import { theme } from "./theme";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={theme}
        locale={viVN}
        pagination={{
          showSizeChanger: true,
        }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
