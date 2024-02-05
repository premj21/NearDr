import React from "react";
import { Box, Text, Avatar, Spacer } from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsFillPersonFill, BsFillPersonPlusFill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

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
          //border={"1px solid black"}
        >
          <Box
            //border={"1px solid green"}
            mt={"10%"}
            pl={"17%"}
          >
            <Spacer />
            <BiLeftArrowAlt size={"40"} />
            <Spacer />
            <Text fontWeight={"400"} letterSpacing={"1px"} fontSize={"1.2rem"}>
              Profile Settings
            </Text>
          </Box>
          <Box
            // border={"1px solid red"}
            mt={"5%"}
            pl={"17%"}
            display={"flex"}
            flexDir={"row"}
            gap={"5%"}
          >
            <BsFillPersonFill size={"25 "} />
            <Text letterSpacing={"1px"}>Manage Your</Text>
          </Box>
          <Spacer />
          <Box
            // border={"1px solid red"}
            mt={"5%"}
            pl={"17%"}
            display={"flex"}
            flexDir={"row"}
            gap={"5%"}
          >
            <FaCreditCard size={"20"} />
            <Text letterSpacing={"1px"}> Update Your Payment</Text>
          </Box>
          <Spacer />
          <Box
            // border={"1px solid red"}
            mt={"5%"}
            pl={"17%"}
            display={"flex"}
            flexDir={"row"}
            gap={"5%"}
          >
            <FaShield size={"20"} />
            <Text letterSpacing={"1px"}>Ensure</Text>
          </Box>
          <Spacer />
          <Box
            // border={"1px solid red"}
            mt={"5%"}
            pl={"17%"}
            display={"flex"}
            flexDir={"row"}
            gap={"4%"}
          >
            <BsFillPersonPlusFill size={"25"} />
            <Text letterSpacing={"1px"}>Set your</Text>
          </Box>
          <Spacer />
          <Box
            // border={"1px solid red"}
            mt={"5%"}
            pl={"17%"}
            display={"flex"}
            flexDir={"row"}
            gap={"4%"}
          >
            <IoMdNotifications size={"25"} />
            <Text letterSpacing={"1px"}>Stay up-to-</Text>
          </Box>
          <Spacer />
          <Box
            //border={"1px solid red"}
            mt={"5%"}
            pl={"17%"}
            display={"flex"}
            flexDir={"row"}
            gap={"5%"}
          >
            <BsFillPersonFill size={"25"} />
            <Text letterSpacing={"1px"}>Add family members to</Text>
          </Box>
        </Box>
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

          {/* user profile avatar  */}

          <Avatar
            size={"xl"}
            src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Box
            w="40%"
            //border={"1px solid black"}
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
            <Box w="100%" display={"flex"} justifyContent={"space-between"}>
              <Text
                fontWeight={"600"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                Nationality
              </Text>

              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                American
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
                Date of Birth
              </Text>

              <Text
                fontWeight={"300"}
                textAlign={"start"}
                letterSpacing={"1px"}
                fontSize={"1rem"}
              >
                01/01/2000
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
