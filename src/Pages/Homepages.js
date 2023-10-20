import React from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import Login from "../components/Authentications/Login";
import SignUp from "../components/Authentications/SignUp";
import backgroundVideo from "../background.mp4";



function Homepages() {
  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  return (
    <ChakraProvider >
      <Box position="relative">
        <video autoPlay muted loop style={videoStyle}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <Container maxW="xl">
          <Box
            d="flex"
            justifyContent="center"
            p={4}
            bg="white"
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
          >
            <Text fontSize="4xl" fontFamily="workSans" margin={4}  color="#fc03a1">
              HII BARBIE
            </Text>

            <Tabs variant="soft-rounded" colorScheme="pink">
              <TabList>
                <Tab w="50%">Login</Tab>
                <Tab w="50%">SignUp</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <SignUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default Homepages;
