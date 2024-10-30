import { useMediaQuery } from "@mui/material";
import { media, theme } from "../styles/theme"; // 커스텀 테마

//useDeviceSiz라는 커스텀 훅을 만들어 지정한 화면 크기를 감지해 사용할 수 있도록 정의.
//useMediaQuery를 활용해 특정 브레이크포인트 이하일 때 동작하도록 설정
export default function useDeviceSize() {
  const isMobileS = useMediaQuery(theme.breakpoints.down("mobileS"));
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const isTablet = useMediaQuery(theme.breakpoints.down("tablet"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("desktop"));
  const isPc = useMediaQuery(theme.breakpoints.down("pc"));
  const isSMDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return { isPc, isDesktop, isTablet, isMobile, isMobileS, isSMDevice };
}
