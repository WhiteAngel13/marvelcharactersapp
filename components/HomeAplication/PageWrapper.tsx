import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import { BackgroundImageAnimation } from "./BackgroundImageAnimation"

interface PageWrapperProps{
  children: ReactNode;
}

export function PageWrapper({
  children
}: PageWrapperProps){

  return(
    <Box
      bg="gray.900"
      width="100%"
      height="100vh"
      position="relative"
      overflow="hidden"
    >
      <BackgroundImageAnimation/>
      {children}
    </Box>
  )
}