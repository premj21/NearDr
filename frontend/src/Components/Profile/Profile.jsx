import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          h="100%"
          w="25%"
          //  border={"1px solid black"}
        ></Box>
        <Box
          w="75vw"
          h="100%"
          p="4%"
          display={"flex"}
          flexDir={"column"}
          //   alignItems={"center"}
          //   justifyContent={"center"}
          // border={"1px solid black"}
          boxShadow={
            "rgba(218, 218, 218, 0.5) 3px 3px 6px 0px inset,rgba(255, 255, 255, 0.24) -3px -3px 6px 1px inset"
          }
          gap="8vh"
        >
          <Box
            w="100%"
            h="fit-content"
            display={"flex"}
            flexDir={"column"}
            // gap={"100px"}
          >
            <Text fontWeight={"600"} letterSpacing={"1px"} fontSize={"1.8rem"}>
              Personal Details
            </Text>
            <Text fontWeight={"300"} fontSize={"0.9rem"} letterSpacing={"1px"}>
              Edit your personal
            </Text>
          </Box>

          <Box
            w="40%"
            border={"1px solid black"}
            h="fit-con"
            display={"flex"}
            flexDir={"column"}
            gap="50px"
          >
            <Box
              w="100%"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text
                fontWeight={"600"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Full Name
              </Text>
              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Prem Jadhav
              </Text>
              <Text
                fontWeight={"300"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
                textAlign={"start"}
              >
                Edit
              </Text>
            </Box>

            <Box
              w="100%"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Text
                fontWeight={"600"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Location
              </Text>

              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Solapur Maharashtra
              </Text>
              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Edit
              </Text>
            </Box>

            <Box w="100%" display={"flex"} justifyContent={"space-between"}>
              <Text
                fontWeight={"600"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Email
              </Text>

              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                premjadhav378@gmail.com
              </Text>
              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Edit
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
