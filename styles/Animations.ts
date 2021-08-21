import { keyframes } from "@chakra-ui/react";

const breath = keyframes`
  0%{
    background-image: url("/bg01.png");
  }
  25%{
    transform: translateX(50px) scale(1.2)
  }
  48%{
    transform: translateX(50px) scale(1.2)
  }
  50%{
    background-image: url("/bg02.png");
  }
  100%{
    transform: translate(0px) scale(1);
  }
`

export { breath }