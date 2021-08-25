import { Box, BoxProps, Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import { BackgroundImageAnimation } from "./BackgroundImageAnimation"

interface PageWrapperProps extends BoxProps{
  children: ReactNode;
}

export function PageWrapper({
  children,
  ...rest
}: PageWrapperProps){

  return(
    <Box
      bg="gray.900"
      width="100%"
      height="100vh"
      position="relative"
      {...rest}
    >
      <BackgroundImageAnimation/>
      <Flex
      position="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"
      >
        {children}
      </Flex>
    </Box>
  )
}