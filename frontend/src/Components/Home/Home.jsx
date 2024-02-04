import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import img from "./Home.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Popularhealthcare from "../Popular HealthCares/Popularhealthcare";

export const Home = () => {
  const navigator = useNavigate();
  return (
    <>
      <Box
        width="90vw"
        m="0 5vw"
        height="290"
        position={"relative"}
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        mb="5rem"
      >
        <Box
          w="100%"
          h="100%"
          position={"absolute"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={"2"}
        >
          <Text fontSize="2.5rem" fontWeight="600" letterSpacing={"1.5px"}>
            Connect with healthcare professionals
          </Text>
          <Text fontSize="1.5rem" fontWeight="400" letterSpacing={"1.3px"}>
            Discover healthcare professionals near you
          </Text>
        </Box>
        <Box
          w="50%"
          h="25%"
          zIndex={"4"}
          backgroundColor={"#ffffff"}
          position={"absolute"}
          bottom="-10%"
          borderRadius="50"
          boxShadow="rgba(3, 3, 3, 0.1) 0px 2px 10px"
          display={"flex"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"5%"}
          pl="5%"
        >
          <Box
            h="100%"
            w="auto%"
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap="2px"
          >
            <Text letterSpacing={"1.5px"} fontWeight={"500"}>
              Search by location
            </Text>
            <Text letterSpacing={"1px"} fontWeight={"300"}>
              Enter your location
            </Text>
          </Box>

          <Box w="1px" h="80%" backgroundColor={"#80808036"}></Box>
          <Box
            h="100%"
            w="auto%"
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap="2px"
          >
            <Text letterSpacing={"1.5px"} fontWeight={"500"}>
              Choose date
            </Text>
            <Text letterSpacing={"1px"} fontWeight={"300"}>
              Select a date
            </Text>
          </Box>

          <Box w="1px" h="80%" backgroundColor={"#80808036"}></Box>

          <Box
            h="100%"
            w="auto%"
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap="2px"
          >
            <Text letterSpacing={"1.5px"} fontWeight={"500"}>
              Choose time
            </Text>
            <Text letterSpacing={"1px"} fontWeight={"300"}>
              Select a time
            </Text>
          </Box>

          <Box
            h="100%"
            w="auto"
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            ml="5%"
          >
            <Button
              p="1.8rem 0.5rem"
              borderRadius={"50%"}
              variant={"solid"}
              colorScheme={"orange"}
              onClick={() => navigator("/doctors")}
            >
              <ArrowForwardIcon
                color="primary"
                style={{ height: "3rem", width: "3rem" }}
              />
            </Button>
          </Box>
        </Box>
        <Image
          src={img}
          h="100%"
          w="100%"
          opacity="0.51"
          zIndex={"1"}
          borderRadius="24"
          boxShadow="rgba(3, 3, 3, 0.1) 0px 2px 10px"
        />
      </Box>
      <Box w="100vw" h="auto">
        <Popularhealthcare />
      </Box>
    </>
  );
};
