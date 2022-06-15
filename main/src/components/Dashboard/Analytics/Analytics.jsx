import React from 'react'
import {useColorMode, Box, Center, Text,FormControl,Select,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import {BiCheckCircle} from 'react-icons/bi'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';
import meta from '../../../assets/meta.jpeg'


function Analytics() {

  document.title = `Analytics`
  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Mai',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const crapydata = [
    {
      followers : 55
    }
  ]

    const {colorMode} = useColorMode();

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
          <Center w="100%" h="100%">
            <Box width="95%" height="100%" >
                    <Box width="100%">
                        <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Channel analytics</Text>
                    </Box>
                    <Box bg="#242627" borderRadius="5px">
                      <Center w="100%">
                        <Box d="flex" w="95%" borderBottom="1px solid rgb(255,255,255,0.2)" pt={1} pb={1} >
                          <Box w="70%" pt={2}>
                            <Text as="h3" w="10%" fontSize="1rem" pb={2} borderBottom="2px solid #3EA6FF" fontWeight="bold" color="#3EA6FF">Overview</Text>
                          </Box>
                          <Box w="30%" height="auto">
                            <FormControl p="0 auto">
                        
                                <Select bg="#242627" fontSize="0.95rem" fontFamily="sans-serif" size="lg" border="none" _focus={{border: 'none'}} color="white" cursor="pointer">
                                  <option value='Last 28 days' selected>&nbsp;Last 28 days</option>
                                  <option value='Last 7 days'>&nbsp;Last 7 days</option>
                                  <option value='Last 90 days'>&nbsp;Last 90 days</option>
                                  <option value='Last 365 days'>&nbsp;Last 365 days</option>
                                  <option value='Lifetime'>&nbsp;Lifetime</option>
                                 
                                </Select>
                            </FormControl>
                          </Box>
                      </Box>
                      </Center>
                      
                          <Box w="100%" h="100%" d="flex" pt={5}>
                            <Box w="70%" height="100%">
                              <Center w="100%" height="auto" pt={2}>
                                <Box w="70%">
                                    <Text as="h2" fontSize="1.45rem" fontWeight="bold">Your channel didn’t get any views in the last 28 days</Text>
                                </Box>
                              </Center>
                                <Tabs pt={7} ml={8} mr={8} >
                                  <TabList border="none" >
                                    <Tab _focus={{outline : 'none'}}  pt={10} pb={10} borderRadius="5px 0px 0px 0px" _selected={{borderBottom: 'none',borderTop: '3px solid #3EA6FF', bg:"none"}} bg="#1F1F1F" border="1px solid rgb(255,255,255,0.2)" w="33%" >
                                      <Box>
                                           <Text as="h4" color="rgb(255,255,255,0.5)" fontSize="0.85rem">Views</Text>
                                          <Text as="p" fontWeight="bold">___</Text>
                                      </Box>
                                   
                                    </Tab>
                                    <Tab  _focus={{outline : 'none'}}  pt={10} pb={10} _selected={{borderBottom: 'none',borderTop: '3px solid #3EA6FF' , bg: 'none'}} w="33%" border="1px solid rgb(255,255,255,0.2)" bg="#1F1F1F">
                                      <Box>
                                           <Text as="h4" color="rgb(255,255,255,0.5)" fontSize="0.85rem">Watch time (hours)</Text>
                                          <Text as="p" fontWeight="bold">___</Text>
                                      </Box>
                                    </Tab>
                                    <Tab  _focus={{outline : 'none'}} borderRadius="0px 5px 0px 0px" pt={10} pb={10} _selected={{borderBottom: 'none',borderTop: '3px solid #3EA6FF' , bg: 'none'}} w="33%" border="1px solid rgb(255,255,255,0.2)" bg="#1F1F1F">
                                      <Box>
                                           <Text as="h4" color="rgb(255,255,255,0.5)" fontSize="0.85rem">Followers</Text>
                                          <Text as="p" fontWeight="bold" fontSize="1.2rem">{crapydata[0].followers < 1 ? "___" : <Box d="flex"> <Text>+ {crapydata[0].followers}</Text> <Box pt={2} pl={3}><BiCheckCircle size="1.1rem" color="green" /></Box> </Box>}</Text>
                                      </Box>
                                    </Tab>
                                  </TabList>

                                  <TabPanels>
                                    <TabPanel>
                                    <Box>
                                    <AreaChart
                                      width={765}
                                      height={200}
                                      data={data}
                                      margin={{
                                        top: 5,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <CartesianGrid strokeDasharray="1 3" />
                                      <XAxis dataKey="name" />
                                      
                                      <Tooltip />
                                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                  </Box>
                                    </TabPanel>
                                    <TabPanel>
                                    <Box>
                                    <AreaChart
                                      width={765}
                                      height={200}
                                      data={data}
                                      margin={{
                                        top: 5,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <CartesianGrid strokeDasharray="1 3" />
                                      <XAxis dataKey="name" />
                                      
                                      <Tooltip />
                                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                  </Box>
                                    </TabPanel>
                                    <TabPanel>
                                    <Box>
                                    <AreaChart
                                      width={765}
                                      height={200}
                                      data={data}
                                      margin={{
                                        top: 5,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <CartesianGrid strokeDasharray="1 3" />
                                      <XAxis dataKey="name" />
                                      
                                      <Tooltip />
                                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                  </Box>
                                    </TabPanel>
                                  </TabPanels>
                                </Tabs>

                              
                            </Box>

                            <Box w="30%" height="100%" >
                                <Box w="90%" bg="#1F1F1F" borderRadius="10px" mt={1.5}>
                                      <Box pl={5} pt={2} pb={2} borderBottom="1px solid rgb(255,255,255,0.05)">
                                          <Text fontWeight="bold" fontSize="1.2rem">42</Text>
                                          <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">Followers</Text>
                                       </Box>

                                       <Box pl={5} pt={2} pb={2} borderBottom="1px solid rgb(255,255,255,0.05)">
                                          <Text fontWeight="bold" fontSize="1.2rem">115</Text>
                                          <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">Views · Last 48 hours</Text>
                                       </Box>
                                       <Box pl={5} pt={2} pb={2} >
                                          <Text fontWeight="bold" fontSize="1.2rem" color="green">756</Text>
                                          <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem" >$CRTC Earnings · Last 28 days</Text>
                                       </Box>
                                </Box>
                                <Box w="90%" bg="#1F1F1F" borderRadius="10px" mt={5}>
                                  <Center>
                                    <Box width="100%" textAlign="left" pb={2}>
                                          <Text as="h3" pt={1} pl={5}>Latest videos</Text>
                                          <Box height={155} >
                                            <Center width="100%" pt={2}>
                                              <Box width="85%" bgImage={`url(${meta})`} height={135} bgSize="cover">
                                                
                                                <Box bg="rgb(0,0,0,0.4)" mt={20} pt={2} pb={1.5}>
                                                  <Center w="100%">
                                                      <Box w="90%">
                                                        <Text pt={1} fontSize="0.75rem" fontWeight="bold"> Cratch - the Fully Dencentralized MetaStreaming Platform </Text>
                                                      </Box>  
                                                  </Center>
                                                  
                                                </Box>
                                                
                                              </Box>
                                              
                                            </Center>
                                            
                                          </Box>
                                          
                                    </Box>
                                  </Center>
                                </Box>
                            </Box>
                          </Box>
                    </Box>
                

                
                    
            </Box>
            </Center>
    </Box>
  )
}

export default Analytics