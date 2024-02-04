import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Popularhealthcare = () => {
  return (
    <>
      <Box
        w="90vw"
        m={"1vw 5vw"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="25px"
      >
        <Text
          letterSpacing={"1.4px"}
          fontSize={"1.5rem"}
          alignSelf={"flex-start"}
          fontWeight={"450"}
        >
          Popular healthcare
        </Text>

        <Box
          w="100%"
          h="50vh"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1%"}
        >
          <Image
            borderRadius={"20px"}
            w="24%"
            h="100%"
            src="https://images.unsplash.com/photo-1551224820-ad4d0e716932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxIb3NwaXRhbCUyQyUyMERvY3RvciUyQyUyMEhlYWx0aGNhcmV8ZW58MXx8fHwxNzA2NjgzNTYwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="loading"
          />

          <Box w="24%" h="100%">
            <Image
              borderRadius={"20px"}
              w="100%"
              h="50%"
              src="https://images.unsplash.com/photo-1612283105644-7ff66a3d5d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxEZW50aXN0JTJDJTIwVGVldGglMkMlMjBIZWFsdGhjYXJlfGVufDF8fHx8MTcwNjY4MzU2MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="loading"
            />
            <Image
              borderRadius={"20px"}
              w="100%"
              h="45%"
              mt="4%"
              src="https://images.unsplash.com/photo-1632053005736-6bd9cfc4daf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxQZWRpYXRyaWNpYW4lMkMlMjBDaGlsZCUyQyUyMEhlYWx0aGNhcmV8ZW58MXx8fHwxNzA2NjgzNTYwfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="loading"
            />
          </Box>

          <Image
            borderRadius={"20px"}
            w="22%"
            h="100%"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxDbGluaWMlMkMlMjBEb2N0b3IlMkMlMjBIZWFsdGhjYXJlfGVufDF8fHx8MTcwNjY4MzU2MHww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="loading"
          />
          <Box w="26%" h="100%">
            <Image
              borderRadius={"20px"}
              w="100%"
              h="45%"
              src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxQaGFybWFjeSUyQyUyME1lZGljaW5lJTJDJTIwSGVhbHRoY2FyZXxlbnwxfHx8fDE3MDY2ODM1NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="loading"
            />
            <Image
              borderRadius={"20px"}
              w="100%"
              h="50%"
              mt="4%"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxUaGVyYXBpc3QlMkMlMjBNZW50YWwlMjBIZWFsdGglMkMlMjBIZWFsdGhjYXJlfGVufDF8fHx8MTcwNjY4MzU2MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="loading"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Popularhealthcare;

// 1 => https://images.unsplash.com/photo-1551224820-ad4d0e716932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxIb3NwaXRhbCUyQyUyMERvY3RvciUyQyUyMEhlYWx0aGNhcmV8ZW58MXx8fHwxNzA2NjgzNTYwfDA&ixlib=rb-4.0.3&q=80&w=1080

// 2 => https://images.unsplash.com/photo-1612283105644-7ff66a3d5d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxEZW50aXN0JTJDJTIwVGVldGglMkMlMjBIZWFsdGhjYXJlfGVufDF8fHx8MTcwNjY4MzU2MHww&ixlib=rb-4.0.3&q=80&w=1080

// 3 => https://images.unsplash.com/photo-1632053005736-6bd9cfc4daf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxQZWRpYXRyaWNpYW4lMkMlMjBDaGlsZCUyQyUyMEhlYWx0aGNhcmV8ZW58MXx8fHwxNzA2NjgzNTYwfDA&ixlib=rb-4.0.3&q=80&w=1080

// 4 => https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxDbGluaWMlMkMlMjBEb2N0b3IlMkMlMjBIZWFsdGhjYXJlfGVufDF8fHx8MTcwNjY4MzU2MHww&ixlib=rb-4.0.3&q=80&w=1080

// 5 => https://images.unsplash.com/photo-1471864190281-a93a3070b6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxQaGFybWFjeSUyQyUyME1lZGljaW5lJTJDJTIwSGVhbHRoY2FyZXxlbnwxfHx8fDE3MDY2ODM1NjB8MA&ixlib=rb-4.0.3&q=80&w=1080

// 6 => https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxUaGVyYXBpc3QlMkMlMjBNZW50YWwlMjBIZWFsdGglMkMlMjBIZWFsdGhjYXJlfGVufDF8fHx8MTcwNjY4MzU2MHww&ixlib=rb-4.0.3&q=80&w=1080
