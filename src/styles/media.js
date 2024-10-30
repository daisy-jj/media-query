//사용자 정의 커스텀 사이즈
const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  pc: customMediaQuery(1600),
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(600),
};
