import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box
      w="100vw"
      h="13vh"
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      pl={"5%"}
      pr="5%"
      boxShadow={"rgba(219, 194, 194, 0.24) 0px 3px 5px"}
    >
      <Box
        h="100%"
        w="25%"
        // border={"1px solid black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"9%"}
      >
        <Heading fontWeight={600} letterSpacing={"1px"} fontSize={"2.4rem"}>
          NearDr
        </Heading>
        <Box
          h="100%"
          w="100%"
          // border={"1px solid black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="10%"
        >
          <Text mt="6px" letterSpacing={"1.5px"}>
            Find nearby
          </Text>
          <Text mt="6px" letterSpacing={"1.5px"}>
            Schedule
          </Text>
        </Box>
      </Box>
      <Box
        h="100%"
        w="45%"
        // border={"1px solid black"}
        display={"flex"}
        gap="10"
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Button
          variant={"outline"}
          border={"1px solid black"}
          borderRadius={"17px"}
          fontWeight={"300"}
          letterSpacing={"1.5px"}
          fontSize={"1rem"}
          p="1.3rem"
        >
          Sign up
        </Button>
        <Button
          p="1.3rem"
          borderRadius={"17px"}
          variant={"solid"}
          colorScheme={"orange"}
          fontWeight={"300"}
          letterSpacing={"1.5px"}
          fontSize={"1rem"}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
