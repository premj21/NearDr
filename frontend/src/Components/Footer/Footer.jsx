import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        w="100vw"
        h="20vh"
        mt="5rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg="#fafafa"
        borderRadius="8px" /* Adjust as needed */
        boxShadow="rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"
        p="3vh 5vw"
      >
        <Box
          h="100%"
          //   border={"1px solid black"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} flexDir={"column"} gap="2px">
            <Text fontWeight={"500"} fontSize={"1.2rem"} letterSpacing={"1px"}>
              NearDr
            </Text>
            <Text fontWeight={"300"} fontSize={"0.8rem"} letterSpacing={"1px"}>
              Your trusted healthcare companion since 1997!
            </Text>
          </Box>

          <Text
            textAlign={"start"}
            fontWeight={"300"}
            fontSize={"0.8rem"}
            letterSpacing={"1px"}
          >
            NearDr @2024
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap="10px"
          w="10%"
          h="100%"
          justifySelf={"flex-end"}
          //   border={"1px solid black"}
        >
          <Text fontWeight={"300"} fontSize={"0.8rem"} letterSpacing={"1px"}>
            Help Center
          </Text>
          <Text fontWeight={"300"} fontSize={"0.8rem"} letterSpacing={"1px"}>
            FaQs
          </Text>
          <Text fontWeight={"300"} fontSize={"0.8rem"} letterSpacing={"1px"}>
            How it Works
          </Text>
          <Text fontWeight={"300"} fontSize={"0.8rem"} letterSpacing={"1px"}>
            Contact Us
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
