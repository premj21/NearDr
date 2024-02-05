import React from "react";
import { Box, Button, Input, Text, Checkbox } from "@chakra-ui/react";

const Search = () => {
  const p = "< 50";
  const [s, setS] = React.useState(false);
  return (
    <>
      <Box w="100vw" h="100vh" display={"flex"}>
        <Box h="100%" w="25%" display={"flex"} flexDir={"column"} gap="10px">
          <Box
            h="fit-content"
            w="100%"
            p="10% 5vw"
            display={"flex"}
            flexDir={"column"}
            gap="10px"
            boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.1)"
            borderBottom="4px solid transparent"
          >
            <Text
              fontWeight={"600"}
              fontSize={"1.1rem"}
              letterSpacing={"1.2px"}
            >
              Search Filters
            </Text>
            <Box
              w="100%"
              h="fit-content"
              display={"flex"}
              flexDir={"column"}
              alignItems={"flex-start"}
              gap="10px"
            >
              <Box
                w="100%"
                h="fit-content"
                display={"flex"}
                flexDir={"column"}
                alignItems={"flex-start"}
                gap="5px"
              >
                <Text
                  fontWeight={"300"}
                  fontSize={"0.9rem"}
                  letterSpacing={"1px"}
                >
                  Location
                </Text>
                <Input
                  type="text"
                  placeholder="Enter Location"
                  border="none"
                  borderRadius="20px"
                  // bg="gray.100"
                  boxShadow="inset 0px -1px 1px rgba(0, 0, 0, 0.4)"
                  p="10px"
                  _focus={{
                    boxShadow: "inset 0 1px 2px white, 0 0 0 1px grey",
                  }}
                />
              </Box>

              <Box
                w="100%"
                h="fit-content"
                display={"flex"}
                flexDir={"column"}
                alignItems={"flex-start"}
                gap="5px"
              >
                <Text
                  fontWeight={"300"}
                  fontSize={"0.9rem"}
                  letterSpacing={"1px"}
                >
                  Appointment Date
                </Text>
                <Input
                  type="date"
                  placeholder="Enter Date"
                  border="none"
                  borderRadius="20px"
                  // bg="gray.100"
                  boxShadow="inset 0px -1px 1px rgba(0, 0, 0, 0.4)"
                  p="10px"
                  _focus={{
                    boxShadow: "inset 0 1px 2px white, 0 0 0 1px grey",
                  }}
                />
              </Box>

              <Box
                w="100%"
                h="fit-content"
                display={"flex"}
                flexDir={"column"}
                alignItems={"flex-start"}
                gap="5px"
              >
                <Text
                  fontWeight={"300"}
                  fontSize={"0.9rem"}
                  letterSpacing={"1px"}
                >
                  Appointment Time
                </Text>
                <Input
                  type="time"
                  placeholder="Enter Time"
                  border="none"
                  borderRadius="20px"
                  // bg="gray.100"
                  boxShadow="inset 0px -1px 1px rgba(0, 0, 0, 0.4)"
                  p="10px"
                  _focus={{
                    boxShadow: "inset 0 1px 2px white, 0 0 0 1px grey",
                  }}
                />
              </Box>

              <Box
                w="100%"
                h="fit-content"
                display={"flex"}
                flexDir={"column"}
                alignItems={"flex-start"}
                gap="5px"
              >
                <Text
                  fontWeight={"300"}
                  fontSize={"0.9rem"}
                  letterSpacing={"1px"}
                >
                  Speciality
                </Text>
                <Input
                  type="text"
                  placeholder="Enter Speciality"
                  border="none"
                  borderRadius="20px"
                  // bg="gray.100"
                  boxShadow="inset 0px -1px 1px rgba(0, 0, 0, 0.4)"
                  p="10px"
                  _focus={{
                    boxShadow: "inset 0 1px 2px white, 0 0 0 1px grey",
                  }}
                />
              </Box>

              <Button
                p="1.3rem"
                mt="5px"
                w="100%"
                borderRadius={"17px"}
                variant={"solid"}
                colorScheme={"orange"}
                fontWeight={"300"}
                letterSpacing={"1.5px"}
                fontSize={"1rem"}
              >
                Search
              </Button>
            </Box>
          </Box>

          <Box w="100%" h="fit-content" p="1% 5vw">
            <Text
              fontWeight={"600"}
              fontSize={"1.1rem"}
              letterSpacing={"1.2px"}
              mb="1rem"
            >
              Price per Appointment
            </Text>

            <Box display={"flex"} w="100%" h="fit-content" gap="10px">
              <Button
                w="fit-content"
                p="10px 30px"
                borderRadius={"30px"}
                cursor={"pointer"}
                border={"0.5px solid grey"}
                _selection={"none"}
                onClick={() => {}}
              >
                {p}
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          w="75%"
          h="100%"
          p="2%"
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
          <Box w="100%" h="fit-content" display={"flex"} flexDir={"column"}>
            <Text fontWeight={"300"} fontSize={"0.9rem"} letterSpacing={"1px"}>
              Showing results for you
            </Text>
            <Text fontWeight={"600"} letterSpacing={"1px"} fontSize={"1.8rem"}>
              Doctors near you
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Search;
