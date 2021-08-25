import { Flex } from "@chakra-ui/react"
import { PageLimitator } from "./PageLimitator"

export function ContentArea({children}){

  return(
    <Flex flex="1" overflow="auto">
      <PageLimitator>
        {children}  
      </PageLimitator>
    </Flex>
  )
}