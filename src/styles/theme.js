import { createTheme, css } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1600,
      // Custom breakpoints
      mobileS: 375,
      mobile: 600,
      tablet: 1024,
      desktop: 1200,
      pc: 1600,
    },
  },
  palette: {
    primary: {
      main: "#00a0e7",
    },
    secondary: {
      main: "#00beac",
    },
  },
  typography: {
    fontFamily: "Noto Sans KR",
  },
});

//사용자 정의 커스텀 사이즈
const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  pc: customMediaQuery(1600),
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(600),
};
