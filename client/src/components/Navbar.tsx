import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bgGradient="linear(to-r,teal.100,cyan.100)">
      <Flex align="center" w={{ base: "90%", md: "75%" }} mx="auto">
        <Heading fontSize="2xl" p={4} color="teal.600">
          Kontakt Manager
        </Heading>
        <Spacer />
        <Text fontSize="2xl">
          <Link to="/login">Login/Anmelden</Link>
        </Text>
      </Flex>
    </Box>
  );
};
export default Navbar;
