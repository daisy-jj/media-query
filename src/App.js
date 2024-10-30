import { Typography, Stack, styled, Button } from "@mui/material";
import { media, theme } from "./styles/theme";
import useDeviceSize from "./hooks/useDeviceSize";

const BoxCotainer = styled(Stack)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1000px;
  margin: 0 auto;
  border: 20px solid #00a0e7;

  //3가지 방법을 통해 반응형 스타일을 적용
  /* 1. 직접 커스텀한 breakpoints 사용 */
  ${media.desktop} {
    width: 100vw;
    border: 20px solid #00beac;
  }

  /* 2. MUI breakpoints을 사용하여 스타일 적용 */
  ${theme.breakpoints.down("desktop")} {
    width: 100vw;
    border: 20px solid #00beac;
  }

  /* 기본 css 미디어 쿼리 사용 */
  // MUI의 중단점에 의존하지 않는 경우 유용할 수 있습니다.
  @media (max-width: 500px) {
    width: 100vw;
    border: 10px solid #3679b9;
  }

  //이러한 미디어 쿼리를 통해 다양한 화면 크기에 맞춰 디자인을 유연하게 변경할 수 있습니다.
`;

function App() {
  const { isPc, isDesktop, isMobile, isTablet, isSMDevice } = useDeviceSize();
  //useDeviceSiz 훅에서 설정한 중단점을 가져와서 사용

  //onClick 이벤트 핸들러에 적용
  const handleClick = () => {
    if (isMobile) {
      // 클릭 이벤트가 발생할 때, 600보다 작은 화면에서의 동작
      alert("나는 600px보다 작을 때 동작해요!");
    } else {
      // 600보다 큰 화면에서의 동작
      alert("나는 600px보다 클 때 동작해요!");
    }
  };

  return (
    <>
      <BoxCotainer
        sx={{
          // BoxCotaine 안에서 MUI의 sx 속성을 사용하여 각 breakpoint에 따라 배경색을 다르게 적용할 수 있습니다.
          bgcolor: {
            desktop: "#fff", //1200이상
            tablet: "#ccc", //1024이상
            mobile: "#333", //600이상
            mobileS: "#000", //375이상

            /* [theme.breakpoints.down("mobile")]: {
              width: "90vw",
              border: "15px solid #285682",
            },*/
            /* "@media (max-width: 360px)": {
              border: "5px solid #00a0e7",
            }, */
          },
        }}
      >
        <Typography
          style={{
            fontSize: "8vw",
            color: theme.palette.secondary.main,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {/* isMobile을 사용하여 반응형 스타일을 조건부로 적용할 수 있습니다. */}
          {isMobile
            ? "Moblie"
            : isTablet
            ? "Tablet"
            : isDesktop
            ? "Desktop"
            : "Pc"}
        </Typography>
        <Typography
          style={{
            fontSize: "8vw",
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          UNIVA
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            fontSize: "4.5vw",
            color: "#fff",
            width: isDesktop ? "50vw" : "30vw",
          }}
        >
          {isMobile ? "Mobile" : "Pc"} 버튼
        </Button>
      </BoxCotainer>
    </>
  );
}

export default App;
