import React from 'react'
import {Box, Center,Text,useColorMode} from "@chakra-ui/react"

function Settings() {
    const {colorMode} = useColorMode();

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
            <Center>
              <Box width="95%" height="100%" >
                      <Box width="100%">
                          <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Settings</Text>
                      </Box>
              </Box>
            </Center>
    </Box>
  )
}

export default Settings