import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface HomeApplicationArea{
  children: ReactNode;
}

export function HomeApplicationArea({
  children
}: HomeApplicationArea){

  return(
    <Box
      bg="gray.900"
      width="100%"
      height="100vh"
      position="relative"
      overflow="hidden"
    >
      {children}
    </Box>
  )
}