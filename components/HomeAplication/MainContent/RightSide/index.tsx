import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface RightSideProps {
  children: ReactNode
}

export function RightSide({
  children
}: RightSideProps){

  return(
    <Flex
      flex="1"
    >
      {children}
    </Flex>
  )

}