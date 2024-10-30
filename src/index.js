import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material"; // ThemeProvider 가져오기
import { theme } from "./styles/theme"; // 커스텀 테마 가져오기

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    {/* ThemeProvider로 App 전체를 감쌈 */}
    <CssBaseline /> {/* 기본 스타일 초기화 */}
    <App />
  </ThemeProvider>
);
