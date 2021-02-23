import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ContactAdd from "./ContactAdd";
import ContactList from "./ContactList";

const Contact = () => {
  return (
    <Box w={{ base: "90%", md: "75%" }} mx="auto">
      <Flex wrap="wrap">
        <ContactAdd />
        <ContactList />
      </Flex>
    </Box>
  );
};
export default Contact;
